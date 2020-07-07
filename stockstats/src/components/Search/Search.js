import React, { useState } from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import '../../assets/css/Search.css';


export default function Search() {
    const { register, handleSubmit, errors} = useForm();

    const [results, setResults] = useState([]);

    const [submitted, setSubmit] = useState(false);

    const onSubmit = data => {
        console.log(data);
        axios.post(`/api/jobsearch/`, {
            data: data
        }).then((res) => {
            setResults(res.data);
            console.log(results);
        });
        setSubmit(true);
    };

    return (
        <section className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <label for="company">Company</label>
                        <input type="text" name= "company" className="input-control" ref={register} />


                        <label for="ticker" className="rightInline">Stock Ticker</label>
                        <input type="text" name="ticker" className="input-control" ref={register} />
                    </div>

                <div className="form-row">
                    <input id="submit" type="submit"/>
                </div>
            </form>
        <div>
            {/* {submitted && results.length !== 0 && <JobSearchTable resultset = {results} />} */}
        </div>

        </section>

    )
}