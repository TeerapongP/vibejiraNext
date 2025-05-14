import React from 'react';

interface FilterBarProps {
    // ใส่ props ที่ต้องการจาก parent component
}

const FilterBar = () => {
    return (
        <div className="tw-flex tw-justify-between tw-p-4 tw-bg-gray-100 tw-rounded-lg tw-shadow-md">
            <div className="tw-flex tw-space-x-4">
                <select className="tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md">
                    <option value="ongoing">Ongoing</option>
                    <option value="triage_pending">Triage Pending</option>
                    <option value="waiting">Waiting</option>
                    <option value="done">Done</option>
                </select>
                <select className="tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md">
                    <option value="last_week">Last Week</option>
                    <option value="last_month">Last Month</option>
                    <option value="all_time">All Time</option>
                </select>
            </div>
            <button className="tw-bg-blue-600 tw-text-white tw-px-4 tw-py-2 tw-rounded-md">
                Apply Filters
            </button>
        </div>
    );
};

export default FilterBar;