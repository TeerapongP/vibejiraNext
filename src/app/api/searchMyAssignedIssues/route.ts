import { searchMyAssignedIssues } from '@/lib/jiraService'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const tickets = await searchMyAssignedIssues()
        return NextResponse.json(tickets)
    } catch (err) {
        return NextResponse.json({ error: 'Jira fetch failed' }, { status: 500 })
    }
}