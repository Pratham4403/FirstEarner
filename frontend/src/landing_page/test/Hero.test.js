import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../home/Hero';

describe("Hero Component",()=>{
    test("renders hero image",()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("hero-image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");
    });

    test("renders signup button",()=>{
        render(<Hero/>);
        const signupButton = screen.getByRole("button",{name : "/Sign up for free/i"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn");
    });
})