import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"

const Section =(props)=>{
 return(
    <section className={`h-screen flex flex-col justify-center p-10 ${props.right ? "items-end" : "items-start"}`} style={{opacity:props.opacity}}>
     <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
 )
}

const Overlay = () => {
    const scroll=useScroll()
    const[firstSection,setFirstSection]=useState(1)
    const [secondSection,setSecondSection]=useState(1)
    const [thirdSection,setThirdSection]=useState(1)

     useFrame(() => {
    setFirstSection(1 - scroll.range(0, 1 / 3));
    setSecondSection(scroll.curve(1 / 3, 1 / 3));
    setThirdSection(scroll.range(2 / 3, 1 / 3));
  });
  return (
    <Scroll html>
 <div  className="w-screen">
    {/* 1st section */}
<Section opacity={firstSection} >
 <h1 className="font-semibold font-serif text-2xl">
  Hello and welcome
</h1>
<p className="text-gray-500">This is a beautiful portfolio</p>
<p className="mt-3">Skilled in:</p>
<ul className="leading-9">
  <li>🧑‍💻 Coding</li>
  <li>🧑‍🏫 Learning effectively</li>
  <li>📦 Delivering results</li>
</ul>
<p className="animate-bounce mt-6">↓</p>
</Section>
 {/* 2nd section */}
 <Section opacity={secondSection}>
    <h1 className="font-semibold font-serif text-2xl">
  Here are my skillsets 🔥
</h1>
<p className="text-gray-500">PS: Testing is still on my to-learn list 😅</p>

<p className="mt-3">
  <b>Frontend 🚀</b>
</p>
<ul className="leading-9">
  <li>Next.js</li>
  <li>React Native</li>
  <li>Vue.js</li>
  <li>Tailwind CSS</li>
</ul>

<p className="mt-3">
  <b>Backend 🔬</b>
</p>
<ul className="leading-9">
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Prisma</li>
  <li>MongoDB</li>
</ul>

<p className="animate-bounce mt-6">↓</p>

 </Section>
 {/* 3rd section */}
 <Section opacity={thirdSection} >
    <h1 className="font-semibold font-serif text-2xl">
  🤙 Let’s Get in Touch
</h1>
<p className="text-gray-500">
  Quality comes at a price — but it's worth every penny.
</p>
<p className="mt-6 p-3 bg-slate-200 rounded-lg">
  📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
</p>

 </Section>
 </div>
    </Scroll>
  )
}

export default Overlay