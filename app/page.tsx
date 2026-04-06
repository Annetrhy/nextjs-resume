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

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-3 uppercase tracking-wide">
          Experience
        </h2>

        <div className="mb-4">
          <p className="font-semibold">
            Vice President of Professional Activities — Delta Sigma Pi
          </p>
          <p className="text-sm text-gray-500">
            Tampa, FL | Dec 2025 – Present
          </p>
          <ul className="list-disc ml-5 text-sm mt-2">
            <li>Planned and led 10+ professional development events including employer sessions and workshops.</li>
            <li>Managed and allocated budget to meet financial guidelines.</li>
            <li>Collaborated with 50+ executives, alumni, and professionals.</li>
            <li>Oversaw event logistics, promotion, and engagement.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-semibold">
            Hostess — Terra Sur Restaurant
          </p>
          <p className="text-sm text-gray-500">
            Tampa, FL | Jun 2025 – Present
          </p>
          <ul className="list-disc ml-5 text-sm mt-2">
            <li>Coordinated seating and reservations for 100+ customers per shift.</li>
            <li>Managed daily cash receipts and reconciliations accurately.</li>
            <li>Communicated with staff to streamline operations and resolve issues.</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">
            Vice President — The Fashion Society USF
          </p>
          <p className="text-sm text-gray-500">
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
        <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-3 uppercase tracking-wide">
          Skills
        </h2>
        <p className="text-sm">
          <span className="font-semibold">Software:</span> Microsoft Office (Word, Excel, PowerPoint), Tableau, Canva
        </p>
        <p className="text-sm">
          <span className="font-semibold">Languages:</span> English (Native), Spanish (Native)
        </p>
      </section>

      {/* Achievements */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-3 uppercase tracking-wide">
          Achievements & Certifications
        </h2>
        <ul className="list-disc ml-5 text-sm">
          <li>Dean’s List — Muma College of Business (Dec 2024, Apr 2025)</li>
          <li>Certificate of Achievement — Principles of Financial Accounting (Apr 2025)</li>
          <li>Bellini Level 1 Fundamentals Certification (Jul 2025)</li>
          <li>Certiport HTML & CSS Certification (May 2023)</li>
          <li>Certiport Entrepreneurship & Small Business Certification (May 2023)</li>
        </ul>
      </section>

      {/* Leadership */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-2 mb-3 uppercase tracking-wide">
          Leadership & Involvement
        </h2>
        <ul className="list-disc ml-5 text-sm">
          <li>Vice President, USF Fashion Society</li>
          <li>VPPA, Delta Sigma Pi Business Fraternity</li>
          <li>Peer Leader, Muma Compass Program</li>
          <li>Mentee, Corporate Mentor Program</li>
          <li>Member, Accounting Society</li>
          <li>Member, Latin American Student Association</li>
          <li>Social Media Manager, Holcombe Jenkins Scholars Planning Board</li>
        </ul>
      </section>
<footer className="mt-10 text-center text-sm text-gray-500">
  2026 Annet Ramirez Hernandez
</footer>
    </main>
    
  );
}