import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
    return(
        <section className={`h-screen flex flex-col justify-center p-10 ${props.right ? 'items-end':'items-start'}`}>
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}
export const Overlay = () => {
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(2);
    const [opacityThirdSection, setOpacityThirdSection] = useState(3); 

    useFrame(()=>{
        setOpacityFirstSection(1-scroll.range(0,1/3));
        setOpacitySecondSection(scroll.curve(1/3,1/3));
        setOpacityThirdSection(scroll.range(2/3,1/3));
    })

    return(
        <Scroll html>  
        <div className="w-screen">
            <Section opacity={
                opacityFirstSection
            }>
                <h1 className="font-semibold font-serif text-2xl">
                    Hello, I'm Maaz
                </h1>
                <p className="text-gray-500">Welcome to My World</p>
                <p className="mt-3">I Know:</p>
                <ul className="leading-9">
                    <li>💪How to Code</li>
                    <li>🏋🏻How to Learn</li>
                    <li>🤟🏽How to Deliver</li>
                </ul>
                <p className="animate-bounce my-6">↯</p>
            </Section>
            <Section right  opacity={
                opacitySecondSection
            }>
            <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: I never test</p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>React Native</li>
            <li>VueJS</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>tRPC</li>
            <li>NestJS</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
            </Section>
            <Section  opacity={
                opacityThirdSection
            }>
            <h1 className="font-semibold font-serif text-2xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">
            I'm very expensive but you won't regret it
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
          </p>
            </Section>
            </div>  
        </Scroll>
    )
}