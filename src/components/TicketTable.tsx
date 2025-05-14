import React from 'react';

interface TicketTableProps {
    title: string;
    tickets: any[];
    isVisible: boolean;
    toggleVisibility: () => void;
    onRowClick: (ticketKey: string) => void;
    sortConfig: any;
    requestSort: (field: string) => void;
    jiraConfigUrl: string;
}

const TicketTable = ({
    title,
    tickets,
    isVisible,
    toggleVisibility,
    onRowClick,
    sortConfig,
    requestSort,
    jiraConfigUrl,
}: TicketTableProps) => {
    return (
        <div className="tw-mb-6">
            <div className="tw-flex tw-justify-between tw-items-center">
                <h2 className="tw-text-xl tw-font-semibold">{title}</h2>
                <button
                    onClick={toggleVisibility}
                    className="tw-bg-gray-200 tw-px-4 tw-py-2 tw-rounded-md tw-text-sm"
                >
                    {isVisible ? 'Hide' : 'Show'}
                </button>
            </div>

            {isVisible && (
                <table className="tw-w-full tw-mt-4 tw-border-collapse">
                    <thead>
                        <tr>
                            <th onClick={() => requestSort('ticketKey')} className="tw-p-2 tw-cursor-pointer">Ticket Key</th>
                            <th onClick={() => requestSort('status')} className="tw-p-2 tw-cursor-pointer">Status</th>
                            <th onClick={() => requestSort('assignee')} className="tw-p-2 tw-cursor-pointer">Assignee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) => (
                            <tr
                                key={ticket.key}
                                onClick={() => onRowClick(ticket.key)}
                                className="tw-cursor-pointer hover:tw-bg-gray-100"
                            >
                                <td className="tw-p-2">{ticket.key}</td>
                                <td className="tw-p-2">{ticket.status}</td>
                                <td className="tw-p-2">{ticket.assignee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TicketTable;