export interface JiraIssueSummary {
    key: string;
    issueName: string;
    issueTypeName: string;
    priorityName: string;
    status: {
        name: string;
        statusCategory: string;
    };
    created: string;
    updated: string;
}
export interface JiraIssueSummaryResponse {
    issues: JiraIssueSummary[]
    statusCount: Record<string, number>
}
