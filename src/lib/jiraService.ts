import { JiraIssueSummary, JiraIssueSummaryResponse } from '@/types/JiraIssueSummary'

export async function searchMyAssignedIssues(): Promise<JiraIssueSummaryResponse> {
    const jql = 'assignee = currentUser() ORDER BY updated DESC'
    const params = new URLSearchParams({
        jql,
        fields: 'summary,status,issuetype,priority,created,updated',
        maxResults: '50',
        startAt: '0',
    })

    const res = await fetch(`${process.env.JIRA_BASE_URL}/rest/api/3/search?${params}`, {
        headers: {
            Authorization: `Basic ${Buffer.from(`${process.env.JIRA_EMAIL}:${process.env.JIRA_PAT}`).toString('base64')}`,
            Accept: 'application/json',
        },
        cache: 'no-store',
    })

    if (!res.ok) throw new Error('Failed to fetch JIRA issues')

    const data = await res.json()
    const countStatuses = (issues: any[]) => {
        const targetStatuses = ['In Progress', 'Internal-review', 'Done'];

        // ใช้ reduce เพื่อรวมยอดแต่ละ status
        return issues.reduce((acc, issue) => {
            const statusName = issue.fields.status.name;
            if (targetStatuses.includes(statusName)) {
                acc[statusName] = (acc[statusName] || 0) + 1;
            }
            return acc;
        }, {} as Record<string, number>);
    };

    const issues: JiraIssueSummary[] = data.issues.map((issue: any) => ({
        key: issue.key,
        issueName: issue.fields.summary,
        issueTypeName: issue.fields.issuetype.name,
        priorityName: issue.fields.priority.name,
        status: issue.fields.status.name,
        created: issue.fields.created,
        updated: issue.fields.updated,
    }));

    const statusCount = countStatuses(data.issues);

    return {
        issues,
        statusCount,
    };
}