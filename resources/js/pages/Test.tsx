import React from 'react';
import TestForm from "../components/TestForm";

class Test extends React.Component {
    render() {
        return (
            <div className="max-w-2xl mx-auto bg-white overflow-hidden shadow rounded-lg">
                <div className="prose prose-sm px-4 pt-5 sm:px-6 sm:pt-6">
                    <h1>Developer test</h1>
                    <p>Thank you for taking the time to review this test. It's intended to be short, and focuses on some
                        of the core technologies we use day-to-day.</p>
                    <p>Please imagine this form represents a real feature, and assume that 3rd-party services are being used for the mail-sending.</p>

                    <section>
                        <h3>Requirements</h3>

                        <p>The form below is incomplete, and will have errors when trying to compile. It is required to do the following:</p>

                        <ul>
                            <li>It should accept multiple sets of [ name, color ] data.</li>
                            <li>The `Add another set` button should add a new row.</li>
                            <li>The `Delete set` button should remove that row.</li>
                            <li>
                                <span>The data should be validated according to the following rules:</span>
                                <ul>
                                    <li>There should be at least 2 sets of [ name, color ]</li>
                                    <li>In each set, both name, and color are required</li>
                                    <li><code>name</code> is a string</li>
                                    <li><code>color</code> is a hex color value, such as <code>#f7ed37</code></li>
                                </ul>
                            </li>
                            <li>It should store the data in a database (any driver is fine).</li>
                            <li>It should mail the data using the provided Mail class, and should be treated as if sent via a 3rd-party service.</li>
                        </ul>
                    </section>
                </div>

                <TestForm/>
            </div>
        );
    }
}

export default Test;
