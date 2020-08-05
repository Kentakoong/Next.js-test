import {useRouter} from 'next/router';

export default function Hello() {
    const router = useRouter();
    console.log(router.query);
    return <h2>x</h2>
}