import Hero from "@/components/Hero";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 m-2";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 풀스택 개발자
          <br />
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>커리어</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          WebGL, GLSL
          <br />
          React, Vue, Node
          <br />
          Git, GitLab, BitBucket
          <br />
          TypeScript, jQuery, three.js
          <br />
          VS Code, Intellij, pyCham
          <br />
          python
        </p>
      </section>
    </>
  );
}
