import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
//Topics menampilkan form pemesanan dari users.js 
export default function Topic() {
    let topicId  = "Berhasil";

    useEffect(() => {
        window.scrollTo(0, window.innerHeight, 'smooth');
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                Status Pemesanan {topicId}
            </header>
        </div>
    )
}