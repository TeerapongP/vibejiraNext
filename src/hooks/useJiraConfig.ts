'use client';
import { useEffect, useState } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const useJiraConfig = () => {
    const [jiraConfigUrl, setJiraConfigUrl] = useState('');

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/config`);
                if (!response.ok) throw new Error('Failed to fetch config');

                const configData = await response.json();
                setJiraConfigUrl(configData.jiraBaseUrl || '#');
            } catch (err) {
                console.error('Error fetching config:', err);
                setJiraConfigUrl('#');
            }
        };

        fetchConfig();
    }, []);

    return { jiraConfigUrl };
};