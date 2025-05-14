import React from 'react';

interface TicketDetailPanelProps {
    ticketDetails: any;
    jiraConfigUrl: string;
}

const TicketDetailPanel = ({ ticketDetails, jiraConfigUrl }: TicketDetailPanelProps) => {
    return (
        <div className="tw-p-4">
            <h3 className="tw-text-xl">Ticket Details: {ticketDetails.key}</h3>
            <div className="tw-mt-4">
                <p><strong>Status:</strong> {ticketDetails.status}</p>
                <p><strong>Description:</strong> {ticketDetails.description}</p>
                <p><strong>Assignee:</strong> {ticketDetails.assignee}</p>
                <p><strong>Priority:</strong> {ticketDetails.priority}</p>
            </div>
            <button className="tw-bg-blue-600 tw-text-white tw-px-4 tw-py-2 tw-rounded-md mt-4">
                View on JIRA
            </button>
        </div>
    );
};

export default TicketDetailPanel;