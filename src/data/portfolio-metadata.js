export const PORTFOLIO_METADATA = {
 name: 'Vladislav Karpovich',
 position: 'Full Stack Developer',
 region: 'Brest, Belarus',
 social: {
	 email: 'vladislav.karpovich.work@gmail.com',
	 linkedin: 'https://www.linkedin.com/in/vladislav-karpovich-33b835192/',
	 github: 'https://github.com/qlminspire',
 },
 summary: `Experienced Full Stack Developer with about 4 years work in development. Skilled in .NET development including MVC, Web API and Desktop, building rich user interface using HTML, CSS and React library.`,
 skills: ['.NET', 'C#', 'React', 'HTML', 'CSS', 'Javascript', 'SQL'],
 languages: [
	 { language: 'Russian', level: 'Native' },
	 { language: 'English', level: 'Intermediate' },
 ],
 education: [
	 {
		 date: 'August, 2017 - October, 2017',
		 place: 'EPAM',
		 position: 'Trainee (.NET)',
	 },
	 {
		 date: 'September, 2014 - June, 2018',
		 place: 'Brest State Technical University',
		 position: 'Bachelor (Information technologies Engineer)',
		 summary: 'Automated systems of data processing',
	 },
 ],
 experience: [
	 {
		 date: 'November, 2020 - November, 2021',
		 place: 'Military Academy of Belarus',
		 position: 'Software Developer',
		 project: {
			 summary:
			 'Desing and development modules for large military targeted desktop application based on WinForms.',
			 area: 'Military',
			 team: '3 Developers',
			 technologies: ['C#', 'WinForms'],
			 responsibilities: [
				 'Communication with customers, requirements clarification',
				 'Design and development modules for WinForms application',
				 'Modules integration and application release',
			 ],
			 challenges: [
				'Lack of information',
				'Legacy, hardly supported code',
				'Limit in libraries selection as security concern',
				'Limited access to source code'
			 ]
		 },
	 },
	 {
		 date: 'March, 2019 - November, 2020',
		 place: 'EPAM',
		 position: 'Software Developer',
		 project: {
			 summary: `Part of Platform team on huge ASP.NET web-application in lawyalty.
			 Working with messaging, data integrity, database instructions and
			 production bugs.`,
			 area: 'Lawyalty',
			 team: '15+ Developers, 2 QA, 90+ Developers on project',
			 technologies: [
				 'C#',
				 'ASP.NET MVC',
				 'ASP.NET Web API',
				 'Typescript',
				 'NServiceBus',
				 'Azure Cloud',
				 'MSSQL',
				 'WinForms',
	       'PS',
				 'Unity Container'
			 ],
			 responsibilities: [
				'Work with project core functional that impact all project teams',
				'Migration NServiceBus messaging system to newest versions, refactoring',
				'Development of PS commadlets to manage messaging system',
				'Preparation to migration messaging transport from MSMQ to Azure Service Bus',
				'Analysis and production issues resolution, App Insights analysys, data collection',
				'Preparation of the SQL scripts',
				'Communication with customers, presentations (demo)'
			 ],
			 challenges: [
				'Difficulties with migrating NServiceBus version in condition of tightly coupled code',
				'Difficulties with code change in condition of large monolithic project'
			 ]
		 },
	 },
	 {
		 date: 'October, 2017 - March, 2019',
		 place: 'EPAM',
		 position: 'Junior Software Developer',
		 project: {
			 summary: `Set of applications targeted to work with documents in bank system.
Work with documents includes:
		document(batch) upload,
		document parallel processing,
		merge and split documents in regard with metadata,
		results visual representation,
		process of saving results on local computer or on cloud service (Azure Blob Storage),
		reading metadata by QR-code, changing and deleating.
`,
			 area: 'Bank, Finance',
			 team: '3 Developers, 2 QA, BA',
			 technologies: [
				 'C#',
				 'ASP.NET Web API',
				 'React',
				 'Typescript',
				 'Ant Desing',
				 'Storybook',
				 'WinForms',
				 'Entity Framework 6',
				 'MSSQL',
				 'Moq',
				 'Unity Container',
				 'NUnit'
			 ],
			 responsibilities: [
				'Project initial configuration (Webpack configuration), design and development components (React + Typescript), components documentation (Storybook), setting up integration with ASP.NET Web API',
			 'Complete client-side development of the desktop application with use of WinForms',
			 'Took Part in development ASP.NET Web API',
			 'Communication with customers, presentations (demo)',
			 ],
		 },
	 },
 ],
};