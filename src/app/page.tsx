'use client';
import React, { useState } from 'react';
import Loading from '@/components/Loading';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  // const { jiraConfigUrl } = useJiraConfig();
  // const [ticketFilters, setTicketFilters] = useState({
  //   status: 'ongoing',
  //   dateRange: 'last_week',
  // });
  // 

  // const [summaryData, setSummaryData] = useState({ p1Count: 0, p2Count: 0, otherCount: 0 });
  // const [tickets, setTickets] = useState([]);

  // const [p1Visible, setP1Visible] = useState(true);

  return (
    <>
      {loading && <Loading />} 
      {/* <div className="tw-container tw-mx-auto tw-p-6">
        <FilterBar />
        <SummaryCards summaryData={summaryData} summaryLoading={loading} summaryError={null} />

        <TicketTable
          title="P1 Tickets"
          tickets={tickets}
          isVisible={p1Visible}
          toggleVisibility={() => setP1Visible(!p1Visible)}
          onRowClick={() => { }}
          sortConfig={{}}
          requestSort={() => { }}
          jiraConfigUrl={jiraConfigUrl}
        />

        <TicketDetailPanel ticketDetails={{ key: 'JIRA-123', status: 'Ongoing', description: 'Some description', assignee: 'John Doe', priority: 'High' }} jiraConfigUrl={jiraConfigUrl} />
      </div> */}
    </>
  );
};

