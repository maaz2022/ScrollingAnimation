import { Scroll } from "@react-three/drei"

const Section = (props) => {
    return(
        <section className="h-screen flex flex-col justify-center p-10">
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
    return(
        <Scroll html>    
            <Section>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </Section>
            <Section>
                <h1 className="text-3xl font-bold underline">
                    Hello worl!
                </h1>
            </Section>
            <Section>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </Section>
        </Scroll>
    )
}