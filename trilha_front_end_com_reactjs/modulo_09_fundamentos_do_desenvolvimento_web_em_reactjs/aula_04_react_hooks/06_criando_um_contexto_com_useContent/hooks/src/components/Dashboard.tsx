import { UserSection } from "./UserSection"

interface DashboardProps{
    count: number,
    increment: () => void
}

export function Dashboard({ count, increment}: DashboardProps) {
    return (
        <>
            <h2>Dashboard</h2>

            <UserSection count={count} increment={increment} />
        </>
    )
}