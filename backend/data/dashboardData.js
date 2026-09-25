export const dashboardData = {
  stats: [
    { label: 'Active learners', value: '8,420', change: '+12.4%', tone: 'success' },
    { label: 'Course completion', value: '76%', change: '+8.1%', tone: 'info' },
    { label: 'Assignments due', value: '124', change: '-9.2%', tone: 'warning' },
    { label: 'Revenue this month', value: '$84.2K', change: '+21.7%', tone: 'success' }
  ],
  course: [
    { title: 'Product Design Foundations', category: 'UX / Design', lessons: 12, duration: '4 weeks', progress: 82, color: 'violet', mentor: 'Maya Chen' },
    { title: 'Data Analytics Bootcamp', category: 'Business Intelligence', lessons: 18, duration: '6 weeks', progress: 68, color: 'cyan', mentor: 'Ryan Silva' },
    { title: 'Frontend Development Pro', category: 'Engineering', lessons: 15, duration: '5 weeks', progress: 91, color: 'amber', mentor: 'Asha Patel' },
    { title: 'Career Readiness Lab', category: 'Professional Growth', lessons: 9, duration: '3 weeks', progress: 57, color: 'rose', mentor: 'Joel Nguyen' }
  ],
  cohorts: [
    { name: 'Bootcamp Cohort A', learners: 214, completion: '81%', trend: '+5%' },
    { name: 'Career Track 2026', learners: 148, completion: '74%', trend: '+3%' },
    { name: 'Executive Upskilling', learners: 67, completion: '89%', trend: '+7%' }
  ],
  assignments: [
    { name: 'UI critique deck', course: 'Product Design Foundations', due: 'Today, 5:00 PM', status: 'Pending review' },
    { name: 'SQL challenge set', course: 'Data Analytics Bootcamp', due: 'Tomorrow, 9:30 AM', status: 'In progress' },
    { name: 'Capstone milestone', course: 'Frontend Development Pro', due: 'Thu, 2:00 PM', status: 'Needs submission' },
    { name: 'Interview prep worksheet', course: 'Career Readiness Lab', due: 'Fri, 10:00 AM', status: 'Ready to grade' }
  ],
  schedule: [
    { time: '09:00', title: 'Live workshop: Storytelling in UX', type: 'Workshop' },
    { time: '11:30', title: 'Data labs office hours', type: 'Mentoring' },
    { time: '14:00', title: 'Career coaching circle', type: 'Session' },
    { time: '16:15', title: 'Team sprint review', type: 'Review' }
  ],
  notifications: [
    '12 new learners joined the product design track.',
    '3 assignments are overdue in the analytics cohort.',
    'Your Q3 enrollment report is ready to review.'
  ]
};
