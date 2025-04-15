import React, { useState } from 'react';

interface ExhibitProps {
  title: string;
  absurdDescription: React.ReactNode;
  bureaucraticTranslation: string;
  url?: string;
  initiallyAbsurd?: boolean;
}

const Exhibit: React.FC<ExhibitProps> = ({ title, absurdDescription, bureaucraticTranslation, url, initiallyAbsurd = true }) => {
  const [isAbsurd, setIsAbsurd] = useState(initiallyAbsurd);

  return (
    <div className="mb-6 p-4 border border-dashed border-yellow-400 rounded-sm transition-all duration-300 hover:border-solid hover:bg-gray-800/50 relative">
      <button
        onClick={() => setIsAbsurd(!isAbsurd)}
        className="absolute top-2 right-2 text-xs font-mono text-yellow-400 hover:text-yellow-300 bg-gray-700 px-2 py-1 rounded-sm z-10"
        aria-label={`Toggle view for ${title}`}
      >
        {isAbsurd ? '[Reveal Mundanity]' : '[Embrace Absurdity]'}
      </button>
      <h3 className="text-xl font-serif text-yellow-400 mb-2">{title}</h3>
      {isAbsurd ? (
        <div className="text-gray-300 space-y-1">{absurdDescription}</div>
      ) : (
        <p className="text-gray-400 font-mono text-sm">{bureaucraticTranslation}</p>
      )}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 text-xs font-mono block mt-2 break-all"
        >
          [EVIDENCE_FRAGMENT::{url}]
        </a>
      )}
    </div>
  );
};

const AbsurdistPortfolio: React.FC = () => {
  const [distortionLevel, setDistortionLevel] = useState(0);

  const distort = () => {
    setDistortionLevel((prev) => (prev + 1) % 4); // Cycle through 0, 1, 2, 3
  };

  // Distortion styles based on state
  const distortionClasses = [
    '', // No distortion
    'skew-x-1 rotate-1', // Mild distortion
    '-skew-y-2 -rotate-2', // Moderate distortion
    'skew-x-3 skew-y-3 rotate-3 scale-95' // Max distortion
  ];

  return (
    <div className={`min-h-screen bg-gray-900 text-gray-200 p-6 md:p-12 font-sans transition-transform duration-500 ${distortionClasses[distortionLevel]}`}>
      <div className="max-w-4xl mx-auto">

        <header className="mb-12 text-center relative border-b-2 border-dashed border-yellow-400 pb-6">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gray-800 border-2 border-dashed border-teal-400 rounded-full animate-pulse -mt-4 -mr-4"></div>
          <h1 className="text-4xl md:text-5xl font-serif text-yellow-400 mb-2">Divyam Bansal</h1>
          <p className="text-lg text-teal-400 mb-4">Weaver of Digital Dreams or Just Untangling Knots?</p>
          <p className="text-sm font-mono text-gray-400">Roll Number: 180122015 (A number assigned, presumably with meaning)</p>
          <p className="text-sm font-mono text-gray-400">Degree: B.Tech - CST (Certified Sanity Tester?)</p>
          <p className="text-sm font-mono text-gray-400">Institute: IIT Guwahati (An Edifice of Structured Thought)</p>
          <button
             onClick={distort}
             className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded-sm hover:bg-yellow-300 transition-colors text-sm"
           >
             [Induce Mild Reality Flux]
           </button>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-serif text-teal-400 mb-6 border-b border-dashed border-teal-400 pb-2">Manifesto of a Data Alchemist & MLOps Mechanic</h2>
          <p className="mb-4 text-gray-300 italic">
            Herein lies the chronicle of attempts to impose order on the chaotic symphony of data, to build clockwork contraptions (MLOps) that keep the digital ghosts fed and functional. We wrestle with probabilities, converse with algorithms, and build castles in the ephemeral cloud, all while questioning if the patterns we find are real or just pareidolia in the static. Is it science? Is it art? Is it just hitting keys until the errors stop screaming? Perhaps.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif text-teal-400 mb-6 border-b border-dashed border-teal-400 pb-2">Exhibits: Attempts at Taming the Void (Experience)</h2>

          <div className="mb-8 p-4 border border-gray-700 rounded-md">
             <h3 className="text-lg font-semibold text-yellow-500 mb-4">Data Scientist & ML Ops Engineer @ EXL Digital: Orchestrating the Grand Illusion of Efficiency</h3>
             <Exhibit
               title="Exhibit A: Taming the Temporal Paradox"
               absurdDescription="Teaching Ghosts (Agentic AI RAG) to Read Ancient Scrolls, reducing Audit Report Purgatory from 3 Days (an eternity) to a mere 30 Minutes (a fleeting moment)."
               bureaucraticTranslation="Led a 5-engineer team to redesign IAP audit solution using Agentic AI RAG, reducing report time from 72hrs → 30 minutes."
             />
             <Exhibit
               title="Exhibit B: Conjuring Clouds from Code Scratches"
               absurdDescription="Translating Abstract Diagrams (perhaps coffee stains?) into Cloud Castles (AWS CDK via Image-to-Terraform AI), resulting in 50% Less Existential Dread During Setup for 50+ Ephemeral Digital Realms."
               bureaucraticTranslation="Deployed image-to-Terraform AI automation (AWS CDK), cutting cloud infra setup time by 50% for 50+ projects."
             />
             <Exhibit
               title="Exhibit C: The Self-Service Automaton Factory"
               absurdDescription="A Wishing Well for Unstructured Chaos (No-code GenAI Pipeline). Whispered into by 20 Teams Seeking Meaning in Document Soup. Reduced Model Training Time by 65% (compared to manual scrying)."
               bureaucraticTranslation="Built a no-code GenAI Self-Service pipeline for unstructured document data extraction, adopted by 20 teams, reducing model training time by 65%."
             />
              <Exhibit
               title="Exhibit D: Gazing into the Machine's Soul"
               absurdDescription="Implemented a Real-time Crystal Ball (Evidently AI + CloudWatch) to Stare into the Abyss and Foresee Client Disintegration. Resulted in 42% Less Screaming into the Void (Reduced Downtime)."
               bureaucraticTranslation="Engineered real-time monitoring (Evidently AI + CloudWatch), reducing client downtime by 42%."
             />
             <Exhibit
               title="Exhibit E: The Promptsmith's Forge"
               absurdDescription="Forged an Open-Source Babel Fish (Streamlit/MLflow Platform) for AI Whispers. Deployed via Dockerized EC2 Rafts for Internal Consciousness Expansion (Training)."
               bureaucraticTranslation="Developed an open-source Prompt Engineering platform (Streamlit/MLflow) with Dockerized EC2 pipelines for internal training."
             />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif text-teal-400 mb-6 border-b border-dashed border-teal-400 pb-2">Collaborative Hallucinations (Projects)</h2>
           <Exhibit
               title="Ongoing Delusion: British Gas & OVO Energy Agent Framework"
               absurdDescription={<>Conjuring Automated Empathy Machines (AI) to address Existential Billing Crises, Phantom Resource Consumption, Service Visit Paradoxes, Refund Riddles, and Escalation Labyrinths. <span className="text-xs text-gray-500">(Collaborator: Anish Goswami)</span></>}
               bureaucraticTranslation="Built AI for handling customer queries (billing, resource consumption), service visits, refunds, and escalation cases."
            />
           <Exhibit
               title="The Auditor's Labyrinth: JNJ Intelligent AUDIT Processing Pipeline"
               absurdDescription={<>Unleashed the Autopen Agent Automaton (AI RAG) to Scribe Truths from the Audit Ether. Reduced the Ordeal from 72 Hours to 30 Minutes. <span className="text-xs text-gray-500">(Aug 2024 - Ongoing | Collaborator: Anish Goswami)</span></>}
               bureaucraticTranslation="Reduced audit report time from 72hrs → 30 minutes using Autopen Agents AI RAG."
           />
            <Exhibit
               title="Gauging the Sanity of Large Language Leviathans: EXL Insurance LLM Monitoring"
               absurdDescription={<>Monitoring the Usual Suspects: Toxicity Levels, Hallucinatory Tendencies, Temporal Dilation (Latency), and Token Consumption Oracles for Anomaly Detection. <span className="text-xs text-gray-500">(Apr 2024 - Aug 2024 | Collaborator: Vaibhav Mangla)</span></>}
               bureaucraticTranslation="Monitored metrics like toxicity, hallucination, latency, and token usage for anomaly detection."
               url="https://shorturl.at/gxEJq"
            />
            <Exhibit
               title="Sifting Through Insurance Hieroglyphs: WTW Data Extraction"
               absurdDescription={<>Employing Open-Source Oracles (GenAI LLM) to Prospect for Meaning (LOB data) within Unstructured Insurance Proposals. <span className="text-xs text-gray-500">(Nov 2023 - Apr 2024)</span></>}
               bureaucraticTranslation="Built GenAI pipeline for extracting LOB data from unstructured insurance proposals using open-source LLM."
            />
            <Exhibit
                title="The Unstructured Document Whisperer: EXL Self-Service"
               absurdDescription={<>Devised the Pydantic Box (OpenAI wrapper) to Force Order onto Unruly Document Spirits, compelling them to reveal their secrets automatically. <span className="text-xs text-gray-500">(May 2023 - Oct 2023 | Collaborator: Kota Sandeep)</span></>}
               bureaucraticTranslation="Created OpenAI wrapper (pydantic) for auto-extracting data from unstructured documents."
            />
            <Exhibit
               title="Benchmarking the Absurd: AON Pipeline"
               absurdDescription={<>Comparing Apples and Existential Angst (Employee Benefits Data Analysis) to Populate Benchmarking Reports of Questionable Significance. <span className="text-xs text-gray-500">(Feb 2023 - Apr 2023)</span></>}
               bureaucraticTranslation="Analyzed employee benefits data and populated benchmarking reports."
            />
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
             <h2 className="text-2xl font-serif text-teal-400 mb-6 border-b border-dashed border-teal-400 pb-2">Tools of the Esoteric Trade</h2>
             <ul className="space-y-2 list-disc list-inside text-gray-300 font-mono text-sm">
                <li><span className="text-yellow-400">Python:</span> Serpent Charming</li>
                <li><span className="text-yellow-400">AI/ML:</span> Golemancy (Agentic AI), Bibliomancy (RAG), Glossolalia (NLP), Incantation Crafting (Prompt Eng.), Soul Binding (PyTorch)</li>
                <li><span className="text-yellow-400">MLOps:</span> Perpetual Motion Maintenance (SageMaker/Lambda), Imp Bottling (Docker), Ritual Automation (CI/CD GitLab)</li>
                <li><span className="text-yellow-400">Cloud:</span> Æther Architecture (AWS CDK), Spectral Cost Reduction (EC2 Opt.), Azure Thaumaturgy (Azure ML)</li>
                <li><span className="text-yellow-400">Tools:</span> Linking Lost Souls (LangChain), Tracking Escaped Experiments (MLflow), Simple Interfaces for Complex Horrors (Streamlit), Reality Sculpting (Terraform), Chronomancy (GitHub Actions)</li>
                <li><span className="text-yellow-400">Databases:</span> Relational Reliquaries (MySQL), Dynamic Data Daemons (DynamoDB), Cosmic Catalogues (CosmoDB)</li>
                <li><span className="text-yellow-400">OS:</span> Windows (The Glass Pane), Linux (The Penguin's Riddle)</li>
             </ul>
          </div>
           <div>
             <h2 className="text-2xl font-serif text-teal-400 mb-6 border-b border-dashed border-teal-400 pb-2">Accolades from the Void</h2>
             <ul className="space-y-3">
                <li className="flex items-start">
                   <div className="bg-gray-800 border-2 border-dashed border-yellow-400 rounded-sm w-6 h-6 mr-3 mt-1 flex-shrink-0"></div>
                   <span>Ranked <strong className="text-yellow-400">94th Globally</strong>: A Fleeting Echo in the Global Cacophony (Creative Shock 2019, among 1800 teams contemplating chaos).</span>
                </li>
                <li><strong className="text-yellow-400">Certified Whisperer</strong> to Silicon Minds (AI Engineer, Great Learning, 2022).</li>
                <li><strong className="text-yellow-400">Ordained Keeper</strong> of the Machine Cycle (Ada-Sci ML-Ops Engineer, 2025 Mentors).</li>
                <li><strong className="text-yellow-400">*Pending* Seal of Cloud Architecture</strong> (AWS Cloud Architect - awaiting judgment).</li>
             </ul>
              <h2 className="text-xl font-serif text-teal-400 mt-8 mb-4 border-b border-dashed border-teal-400 pb-1">Ephemeral Records (Education)</h2>
              <table className="w-full text-sm font-mono">
                 <thead>
                    <tr className="text-left text-yellow-400">
                       <th>Span</th>
                       <th>Imprint</th>
                       <th>Source</th>
                       <th>Score</th>
                    </tr>
                 </thead>
                 <tbody className="text-gray-400">
                    <tr><td>2018-22</td><td>B.Tech</td><td>IIT Guwahati</td><td>7.51 CGPA</td></tr>
                    <tr><td>2015-17</td><td>Sr. Sec.</td><td>CBSE</td><td>90.8%</td></tr>
                    <tr><td>2012</td><td>Sec.</td><td>CBSE</td><td>10.0 CGPA</td></tr>
                 </tbody>
              </table>
                <h2 className="text-xl font-serif text-teal-400 mt-8 mb-4 border-b border-dashed border-teal-400 pb-1">Duties in the Labyrinth (Positions)</h2>
                <ul className="space-y-1 list-disc list-inside text-gray-300 text-sm">
                    <li>Guardian of Imaginary Gold (Finance Head, Techniche 2021).</li>
                    <li>Scribe of the Hostel's Digital Soul (Technical Secretary, Lohti Hostel, 2019-2021).</li>
                </ul>
           </div>
        </section>


        <footer className="mt-12 pt-6 border-t-2 border-dashed border-yellow-400 text-center">
           <h2 className="text-xl font-serif text-teal-400 mb-4">Transmit Signals or Send Pigeons</h2>
           <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 font-mono text-sm text-gray-400">
              <a href="mailto:db.mail.765@gmail.com" className="hover:text-yellow-300">db.mail.765@gmail.com</a>
              <span>::</span>
              <a href="mailto:divaym18@alumni.iitg.ac.in" className="hover:text-yellow-300">divaym18@alumni.iitg.ac.in</a>
              <span>::</span>
              <span>+91-9034675106</span>
               <span>::</span>
              <a href="https://www.linkedin.com/in/the-outcast" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">LinkedIn: The Lonesome Coder (the-outcast)</a>
           </div>
           <p className="text-xs text-gray-600 mt-8 italic">Is any of this real? Does the model truly understand, or merely predict the next token in the sequence of absurdity?</p>
        </footer>

      </div>
    </div>
  );
};

export default AbsurdistPortfolio;