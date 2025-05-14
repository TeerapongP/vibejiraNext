import React from 'react';

interface SummaryCardsProps {
    summaryData: any;
    summaryLoading: boolean;
    summaryError: any;
}

const SummaryCards = ({ summaryData, summaryLoading, summaryError }: SummaryCardsProps) => {
    if (summaryLoading) return <p>Loading summary...</p>;
    if (summaryError) return <p className="tw-text-red-500">Error fetching summary: {summaryError}</p>;

    return (
        <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-p-4">
            <div className="tw-bg-blue-100 tw-p-4 tw-rounded-lg tw-shadow-md">
                <h3 className="tw-text-lg">P1 Tickets</h3>
                <p className="tw-text-2xl">{summaryData.p1Count}</p>
            </div>
            <div className="tw-bg-yellow-100 tw-p-4 tw-rounded-lg tw-shadow-md">
                <h3 className="tw-text-lg">P2 Tickets</h3>
                <p className="tw-text-2xl">{summaryData.p2Count}</p>
            </div>
            <div className="tw-bg-gray-100 tw-p-4 tw-rounded-lg tw-shadow-md">
                <h3 className="tw-text-lg">Other Tickets</h3>
                <p className="tw-text-2xl">{summaryData.otherCount}</p>
            </div>
        </div>
    );
};

export default SummaryCards;