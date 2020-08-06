import Link from 'next/link';

const phone = [
    {p: 'iphonex', name: 'banana'},
    {p: 'iphone11', name: 'henlo'},
    {p: 'iphone12', name: 'apple'}
]

export default function Details() {
    return <div>
        {phone.map(e => (
            <div>
        <Link as={'/${e.p}/${e.name}'} href="/[phone]/[person]">
            <a>Navigate to {e.name}'s {e.p}</a>
        </Link>
        </div>
        ))}
    </div>
}