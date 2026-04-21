function Experience() {
  return (
    <div className="exp px-4 py-10" id="exp">
      
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
        ✨ Work Experience
      </h1>

      <div className="exp-card">
        <h2 className="company">Axcentra</h2>
        <p className="meta">
          Frontend Developer Intern • Remote • 02/2026 – 03/2026
        </p>

        <ul>
          <li>⚡ Built responsive portfolio with cross-device compatibility</li>
          <li>🌐 Developed weather app using REST APIs (real-time data)</li>
          <li>🧠 Built student dashboard with CRUD (JS)</li>
          <li>🚀 Delivered 4+ projects (API, DOM, performance)</li>
        </ul>

        <div className="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>APIs</span>
        </div>
      </div>

      <div className="exp-card">
        <h2 className="company">Connecting Dreams Foundation</h2>
        <p className="meta">
          Data Analytics & Power BI Intern • Remote • 06/2024 – 07/2024
        </p>

        <ul>
          <li>📊 Built Power BI dashboards for KPI tracking</li>
          <li>🧹 Cleaned & transformed data using SQL</li>
          <li>📈 Generated insights via optimized queries</li>
        </ul>

        <div className="tags">
          <span>Power BI</span>
          <span>SQL</span>
          <span>Data Analysis</span>
        </div>
      </div>

    </div>
  );
}

export default Experience;