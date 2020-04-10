import React,{Component} from 'react'
import Link from 'next/link'
import axios from "axios"

class indexPage extends Component {
    static async getInitialProps() {
        const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
        const {data} = res
        return {
            shows: data.map(entry => entry.show)
        };
    }
    render() {
        return (
            <div>
                <h1>Index Page</h1>
                <Link href="/auth"><a>To auth</a></Link>
                <ul>
                    {this.props.shows.map(show => (
                        <li key={show.id}>
                            <Link href="/p/[id]" as={`/p/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default indexPage