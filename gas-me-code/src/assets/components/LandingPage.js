import React from 'react';
//import './index.css';

export default function LandingPage() {
    return (
        <section className="pageLanderContent">
            <h1>Login Today!</h1>
            <form>
                <label for="name">Your Name</label>
                <input type="text" placeholder="Your Name" id="name" name="name" class="form-input" />
                <label for="email">Your Email</label>
                <input type="text" placeholder="Your email" id="email" name="email" class="form-input" />
            </form>
        </section>
    )
}