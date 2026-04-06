export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 font-sans text-gray-800">

      {/* Header */}
      <header className="mb-8 bg-gray-900 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold">
          Annet Ramirez Hernandez
        </h1>
        <p className="text-sm mt-1">
          Tampa, FL | 832-716-7932 | annetramirezhernandez@gmail.com
        </p>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-3 uppercase tracking-wide">
          Summary
        </h2>
        <p>
          Honors College student with strong teamwork and customer service experience.
          Enthusiastic, eager to learn, and committed to giving 100% effort. Skilled in
          communication and analysis, with a drive to grow professionally and take on new challenges.
        </p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-3 uppercase tracking-wide">
          Education
        </h2>
        <div>
          <p className="font-semibold">
            University of South Florida — Tampa, FL
          </p>
          <p className="text-sm text-gray-500">
            Bachelor of Science in Accountancy and Analytics | Expected May 2028
          </p>
          <p className="text-sm">GPA: 3.94</p>
          <p className="text-sm">CPA Expected: May 2028</p>
          <p className="text-sm mt-2">
            Relevant Coursework: Principles of Financial Accounting (A), Microeconomics (A),
            Macroeconomics (A), Business Calculus (A), Computers in Business (A)
          </p>
        </div>
      </section>
