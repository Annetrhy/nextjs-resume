export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 font-sans text-gray-800">

      {/* Header */}
      <header className="mb-8 bg-gradient-to-r from-blue-950 to-blue-900 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold tracking-tight">
          Annet Ramirez Hernandez
        </h1>
        <p className="text-sm mt-2 text-blue-50 space-y-1">
          <span>Tampa, FL • 832-716-7932 • annetramirezhernandez@gmail.com</span>
        </p>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-500 pb-2 mb-3 uppercase tracking-wide">
          Summary
        </h2>
        <p>
          Honors College student with strong teamwork and customer service experience.
          Enthusiastic about financial analysis and accounting, with a strong commitment to professional growth and impact.
          Skilled in communication and analysis, with a drive to grow professionally and take on new challenges.
        </p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-500 pb-2 mb-3 uppercase tracking-wide">
          Education
        </h2>
        <div>
          <p className="font-semibold text-blue-800">
            University of South Florida — Tampa, FL
          </p>
          <p className="text-sm text-blue-700 font-semibold">
            Bachelor of Science in Accountancy and Analytics | Expected May 2028
          </p>
          <p className="text-sm font-bold text-blue-800">GPA: 3.94</p>
          <p className="text-sm text-gray-700">CPA Expected: May 2028</p>
          <p className="text-sm mt-2">
            Relevant Coursework: Principles of Financial Accounting (A), Microeconomics (A),
            Macroeconomics (A), Business Calculus (A), Computers in Business (A)
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-500 pb-2 mb-3 uppercase tracking-wide">
          Experience
        </h2>

        <div className="mb-4 border-l-4 border-blue-700 pl-4">
          <p className="font-semibold text-blue-800">
            Vice President of Professional Activities — Delta Sigma Pi
          </p>
          <p className="text-sm text-blue-700">
            Tampa, FL | Dec 2025 – Present
          </p>
          <ul className="list-disc ml-5 text-sm mt-2">
            <li>Planned and led 10+ professional development events including employer sessions and workshops.</li>
            <li>Managed and allocated budget to meet financial guidelines.</li>
            <li>Collaborated with 50+ industry executives, alumni, and professionals.</li>
            <li>Oversaw event logistics, promotion, and engagement.</li>
          </ul>
        </div>

        <div className="mb-4 border-l-4 border-blue-700 pl-4">
          <p className="font-semibold text-blue-800">
            Hostess — Terra Sur Restaurant
          </p>
          <p className="text-sm text-blue-700">
            Tampa, FL | Jun 2025 – Present
          </p>
          <ul className="list-disc ml-5 text-sm mt-2">
            <li>Coordinated seating and reservations for 100+ customers per shift.</li>
            <li>Managed daily cash receipts and reconciliations accurately.</li>
            <li>Communicated with staff to streamline operations and resolve issues.</li>
          </ul>
        </div>

        <div className="border-l-4 border-blue-700 pl-4">
          <p className="font-semibold text-blue-800">
            Vice President — The Fashion Society USF
          </p>
          <p className="text-sm text-blue-700">
            Tampa, FL | Jan 2025 – May 2025
          </p>
          <ul className="list-disc ml-5 text-sm mt-2">
            <li>Led initiatives to improve organizational efficiency.</li>
            <li>Collaborated with teams to align goals and strategies.</li>
            <li>Developed policies for resource allocation and project management.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-500 pb-2 mb-3 uppercase tracking-wide">
          Skills
        </h2>
        <div className="mb-3">
          <span className="font-semibold text-gray-900 block mb-2">Technical Proficiencies:</span>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Microsoft Office</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Tableau</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Canva</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Git</span>
          </div>
        </div>
        <div>
          <span className="font-semibold text-gray-900 block mb-2">Languages:</span>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">English (Native)</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Spanish (Native)</span>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-500 pb-2 mb-3 uppercase tracking-wide">
          Achievements & Certifications
        </h2>
        <ul className="list-none pl-0 space-y-2">
          <li className="flex items-start">
            <span className="text-blue-700 font-bold mr-3">•</span>
            <span className="text-sm">Dean's List — Muma College of Business <span className="text-blue-700 font-medium">(Dec 2024, Apr 2025)</span></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-bold mr-3">•</span>
            <span className="text-sm">Certificate of Achievement — Principles of Financial Accounting <span className="text-blue-700 font-medium">(Apr 2025)</span></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-bold mr-3">•</span>
            <span className="text-sm">Bellini Level 1 Fundamentals Certification <span className="text-blue-700 font-medium">(Jul 2025)</span></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-bold mr-3">•</span>
            <span className="text-sm">Certiport HTML & CSS Certification <span className="text-blue-700 font-medium">(May 2023)</span></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-bold mr-3">•</span>
            <span className="text-sm">Certiport Entrepreneurship & Small Business Certification <span className="text-blue-700 font-medium">(May 2023)</span></span>
          </li>
        </ul>
      </section>

      {/* Leadership */}
      <section>
        <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-500 pb-2 mb-3 uppercase tracking-wide">
          Leadership & Involvement
        </h2>
        <ul className="list-none pl-0 space-y-1 text-sm">
          <li className="flex items-start">
            <span className="text-blue-700 font-bold mr-3">•</span>
            <span>Peer Leader, Muma Compass Program</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-bold mr-3">•</span>
            <span>Mentee, Corporate Mentor Program</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-bold mr-3">•</span>
            <span>Member, Accounting Society</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-bold mr-3">•</span>
            <span>Member, Latin American Student Association</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-bold mr-3">•</span>
            <span>Social Media Manager, Holcombe Jenkins Scholars Planning Board</span>
          </li>
        </ul>
      </section>
<footer className="mt-10 text-center text-sm text-gray-500">
  2026 Annet Ramirez Hernandez
</footer>
    </main>
    
  );
}