'use client';

import { useQuery } from '@tanstack/react-query';
import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import Loading from '@/components/ui/loading'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const searchMyAssignedIssues = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/searchMyAssignedIssues`)
    if (!res.ok) throw new Error('Failed to fetch JIRA issues')
    return res.json()
}

export default function TicketCard() {
    const { data: issueData } = useQuery({
        queryKey: ['jira-issue'],
        queryFn: () => searchMyAssignedIssues(),
    })

    const chartData = [
        {
            key: "In Progress",
            value: issueData?.statusCount["In Progress"] || 0,
            fill: "#3B82F6",
        },
        {
            key: "Internal-review",
            value: issueData?.statusCount["Internal-review"] || 0,
            fill: "#F59E0B",
        },
        {
            key: "Done",
            value: issueData?.statusCount["Done"] || 0,
            fill: "#10B981",
        },
    ];

    const chartConfig = {
        "In Progress": {
            label: "In Progress",
            color: "#3B82F6",
        },
        "Internal-review": {
            label: "Internal-review",
            color: "#F59E0B",
        },
        "Done": {
            label: "Done",
            color: "#10B981",
        },
    } satisfies ChartConfig;


    return (
        <>
            {issueData ? (
                <Card className='p-4 w-[400px] h-[450px] rounded-lg shadow-lg mx-5 my-5'>
                    <CardHeader className="items-center pb-0">
                        <CardTitle className="text-xl font-bold text-center">My Assigned Issues from Jira </CardTitle>
                        <CardDescription className="text-sm text-center">January - December 2025</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig}
                            className="mx-auto aspect-square max-h-[250px]"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel indicator="line" />}
                                />
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="key"
                                    innerRadius={60}
                                    strokeWidth={5}
                                >
                                    <Label
                                        content={({ viewBox }) => {
                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                return (
                                                    <text
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            className="fill-foreground text-3xl font-bold"
                                                        >
                                                            {issueData?.issues.length?.toLocaleString()}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className="fill-muted-foreground"
                                                        >
                                                            Issues
                                                        </tspan>
                                                    </text>
                                                )
                                            }
                                        }}
                                    />
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            {((issueData?.issues.length ?? 0) / 12).toFixed(2)}% Trending up by this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Showing total visitors for the last 12 months
                        </div>
                    </CardFooter>
                </Card>
            ) : (
                <Loading />
            )}
        </>
    )
}