import { useRouter } from 'next/router';

export default function Person() {
    const router = useRouter();
    console.log(router.query);
    return <h2>{router.query.person}'s {router.query.phone}</h2>
}