/* ==========================================================================
   Portfolio — Võ Thanh Công | i18n VN/EN, theme, gallery, animation
   ========================================================================== */

/* ---------- 1. Từ điển song ngữ ---------- */
const translations = {
    vi: {
        "nav.home": "Trang chủ", "nav.about": "Giới thiệu", "nav.expertise": "Chuyên môn",
        "nav.journey": "Hành trình", "nav.skills": "Kỹ năng", "nav.projects": "Dự án", "nav.contact": "Liên hệ",

        "hero.eyebrow": "Xin chào, tôi là",
        "hero.role": "HR Generalist & Talent Acquisition",
        "hero.tagline": "Hơn 3 năm đồng hành xây dựng đội ngũ cho doanh nghiệp — từ tuyển dụng, vận hành nhân sự đến văn hóa nội bộ. Tiên phong ứng dụng AI (ChatGPT, Claude, Gemini) để quy trình HR nhanh hơn và thông minh hơn.",
        "hero.downloadCv": "Tải CV (PDF)", "hero.contact": "Liên hệ ngay",
        "hero.statYears": "Năm kinh nghiệm", "hero.statCompanies": "Công ty đa lĩnh vực", "hero.statHires": "Vị trí tuyển thành công",
        "hero.pipe1": "Sẵn sàng nhận việc", "hero.pipe2": "3+ năm HR đa ngành", "hero.pipe3": "Phản hồi trong 24h",

        "about.chip": "Về tôi", "about.title": "Giới thiệu",
        "about.heading": "Kết nối đúng người với đúng mục tiêu của doanh nghiệp",
        "about.p1": "Tôi tốt nghiệp chuyên ngành Quản trị nguồn nhân lực tại Trường Đại học Kinh tế – Đại học Đà Nẵng, và bén duyên với nghề tuyển dụng từ khi còn là sinh viên qua vai trò Talent Acquisition Leader (remote) cho một công ty IT. Hơn 3 năm qua, tôi làm việc tại FPT Telecom, Fish Golden, COF Incorporate và COWI Group, trưởng thành từ vị trí thực tập sinh lên HR Generalist phụ trách trọn vòng đời nhân sự, với trải nghiệm đa ngành: viễn thông, FMCG và thương mại điện tử. Phần lớn trong số đó là môi trường startup, nơi tôi trực tiếp xây hệ thống HR từ những viên gạch đầu tiên — trải nghiệm cho tôi thói quen bắt tay vào việc khó mà không cần ai dọn đường trước.",
        "about.p2": "Với tôi, giá trị của người làm HR nằm ở ba việc: chọn đúng người, xây đúng chính sách và giữ được nhân tài cho tổ chức. Tôi chủ động đưa AI (ChatGPT, Claude, Gemini) vào công việc hằng ngày — từ viết JD, sàng lọc hồ sơ đến tổng hợp báo cáo — để rút ngắn đáng kể thời gian xử lý. Bên cạnh đó, kinh nghiệm điều phối dự án Marketing freelance từ năm 2022 giúp tôi hiểu rõ đặc thù công việc của ứng viên Marketing và đánh giá họ chính xác hơn khi tuyển dụng.",
        "about.emailLabel": "Email", "about.phoneLabel": "Điện thoại", "about.langLabel": "Ngôn ngữ",
        "about.langValue": "Tiếng Việt, Tiếng Anh",
        "about.interestLabel": "Sở trường khác", "about.interestValue": "MC – hoạt náo, content, thiết kế cơ bản",

        "exp.chip": "Tôi làm được gì", "exp.title": "Chuyên môn",
        "exp.c1title": "Tuyển dụng & Headhunt",
        "exp.c1desc": "Tuyển thành công 50+ vị trí từ nhân viên đến cấp trưởng phòng: Sales, ABM, Trưởng phòng Sales/Marketing, đội ngũ Marketing (Content, Designer, Editor, VJ), Livestream, CSKH, BO, Sales Admin... Lead dự án headhunt Cowi Works.",
        "exp.c2title": "Hiệu suất & Vận hành",
        "exp.c2desc": "Giám sát hiệu suất theo tuần, chấm công và hỗ trợ tính lương, tham gia xây dựng chính sách – quy chế, quản lý hồ sơ lao động và tài sản văn phòng.",
        "exp.c3title": "Văn hóa & Sự kiện",
        "exp.c3desc": "Xây dựng văn hóa doanh nghiệp, quy trình onboarding; tổ chức sinh nhật, teambuilding và các sự kiện nội bộ — kiêm luôn vai trò MC hoạt náo.",
        "exp.c4title": "AI trong HR",
        "exp.c4desc": "Ứng dụng ChatGPT, Claude, Gemini vào công việc hằng ngày: viết JD, sàng lọc hồ sơ, content tuyển dụng, tổng hợp báo cáo — tiết kiệm đáng kể thời gian xử lý.",

        "jn.chip": "Học vấn & Kinh nghiệm", "jn.title": "Hành trình",
        "jn.cdfRole": "Cuộc thi Giám sát Kinh doanh Tài năng",
        "jn.cdfSum": "Vượt qua vòng tuyển chọn của cuộc thi CDF. Tham gia để trải nghiệm quy trình đánh giá ứng viên của tập đoàn đa quốc gia từ góc nhìn người dự tuyển — chất liệu thực tế quý giá cho nghề tuyển dụng.",
        "jn.cdfTag": "Đậu vòng tuyển chọn",
        "jn.j1sum": "Phụ trách toàn diện mảng nhân sự, làm việc trực tiếp với CEO và các phòng ban.",
        "jn.j1b1": "Lập kế hoạch và tuyển dụng các vị trí Digital Marketing, BO; sourcing qua Facebook, LinkedIn; xây dựng database ứng viên và đánh giá hiệu quả từng kênh.",
        "jn.j1b2": "Lead dự án Cowi Works — headhunt, cung ứng nhân sự Marketing: tìm kiếm và thương lượng dịch vụ với khách hàng.",
        "jn.j1b3": "Giám sát hiệu suất theo tuần; hỗ trợ chấm công – tính lương; tham gia xây dựng chính sách, quy chế, quy định công ty.",
        "jn.j1b4": "Duy trì hoạt động văn hóa doanh nghiệp, onboarding – offboarding.",
        "jn.j2sum": "Kiêm nhiệm cả tuyển dụng lẫn hành chính – nhân sự cho công ty thương mại điện tử.",
        "jn.j2b1": "Tuyển dụng khối BO, Livestream, Affiliate TikTok qua Facebook, Zalo, LinkedIn, Threads, TikTok; sàng lọc, phỏng vấn và hoàn tất đánh giá thử việc.",
        "jn.j2b2": "Xây dựng quy trình onboarding và văn hóa doanh nghiệp; tổ chức sinh nhật, teambuilding cho CBNV.",
        "jn.j2b3": "Tự thiết kế poster tuyển dụng bằng Canva.",
        "jn.j2b4": "Chấm công – tính lương, chính sách thưởng, quản lý tài sản và thiết bị văn phòng.",
        "jn.j3sum": "Tuyển dụng khối lượng lớn cho ngành Cosmetic – FMCG.",
        "jn.j3b1": "Tuyển các vị trí BO, Mass, Sales qua Facebook, LinkedIn, Zalo; khai thác nguồn ứng viên mới, báo cáo tuyển dụng theo tuần.",
        "jn.j3b2": "Sàng lọc – sơ vấn điện thoại, tham gia phỏng vấn, đánh giá thử việc.",
        "jn.j3b3": "Tổ chức sinh nhật, teambuilding; hỗ trợ quản lý tài sản, thiết bị văn phòng.",
        "jn.j4role": "Thực tập sinh Hành chính – Nhân sự",
        "jn.j4sum": "Bước đệm thực chiến đầu tiên trong môi trường doanh nghiệp lớn.",
        "jn.j4b1": "Hỗ trợ đăng tin, sàng lọc hồ sơ, sơ vấn điện thoại và takecare ứng viên phỏng vấn.",
        "jn.j4b2": "Lập bảng theo dõi tình hình tuyển dụng, báo cáo theo tháng; hỗ trợ công tác phí, báo giá, quản lý thiết bị.",
        "jn.j5sum": "Dẫn dắt nhóm tuyển dụng IT từ xa khi còn là sinh viên năm cuối.",
        "jn.j5b1": "Leader tuyển dụng các vị trí ngành CNTT: lập kế hoạch, tìm nguồn, báo cáo theo tháng.",
        "jn.j5b2": "Phối hợp xây dựng quy trình – chính sách và đào tạo nhân viên mới.",
        "jn.eduSchool": "Trường Đại học Kinh tế – Đại học Đà Nẵng",
        "jn.eduMajor": "Cử nhân Quản trị nguồn nhân lực",
        "jn.eduSum": "Ban chấp hành đoàn khoa Quản trị Kinh doanh: tổ chức teambuilding tân sinh viên, hội trại, tình nguyện đông; leader BTC các hoạt động thiện nguyện, ngoại khóa.",
        "jn.eduTag1": "Hoạt động đoàn", "jn.eduTag2": "Leader BTC",

        "sk.chip": "Công cụ của tôi", "sk.title": "Kỹ năng",
        "sk.g1": "Chuyên môn HR",
        "sk.g1i1": "Sourcing đa kênh", "sk.g1i1d": "Facebook, LinkedIn, Zalo, TikTok, Threads",
        "sk.g1i2": "Phỏng vấn & đánh giá", "sk.g1i2d": "Sơ vấn, phỏng vấn, đánh giá thử việc",
        "sk.g1i3": "Hành chính nhân sự & C&B cơ bản", "sk.g1i3d": "Chấm công, hỗ trợ tính lương, hồ sơ lao động",
        "sk.g1i4": "Quy trình & chính sách", "sk.g1i4d": "Onboarding, quy chế, quy định công ty",
        "sk.g2": "Công cụ",
        "sk.g2exceld": "Chấm công, tính lương, báo cáo dữ liệu",
        "sk.g2wordd": "Hợp đồng, văn bản, tài liệu quy trình",
        "sk.g2pptd": "Slide đào tạo, thuyết trình nội bộ",
        "sk.g2canvad": "Poster tuyển dụng, ấn phẩm truyền thông",
        "sk.g3": "AI Stack",
        "sk.g3i1d": "JD, email, content tuyển dụng",
        "sk.g3i2d": "Phân tích hồ sơ, soạn tài liệu quy trình",
        "sk.g3i3d": "Tổng hợp báo cáo, nghiên cứu thị trường",
        "sk.g3i4": "Quy trình AI hóa", "sk.g3i4d": "Tự động hóa việc lặp lại, tăng tốc xử lý",

        "pj.chip": "Bằng chứng năng lực", "pj.title": "Dự án",
        "pj.c1desc": "Lead dự án headhunt & cung ứng nhân sự Marketing tại COWI Group: tìm kiếm khách hàng, thương lượng hợp đồng dịch vụ, vận hành nguồn ứng viên đáp ứng yêu cầu tuyển gấp.",
        "pj.c2title": "Database ứng viên",
        "pj.c2desc": "Xây dựng và quản lý database ứng viên tập trung; đo lường hiệu quả từng kênh sourcing để tối ưu chi phí và thời gian tuyển dụng.",
        "pj.c3title": "Sự kiện nội bộ", "pj.c3tag": "Sự kiện",
        "pj.c3desc": "Lên kế hoạch và tổ chức chuỗi sinh nhật, teambuilding, chào đón nhân viên mới tại nhiều công ty — trực tiếp làm MC hoạt náo cho chương trình.",
        "pj.c4title": "Ấn phẩm tuyển dụng",
        "pj.c4desc": "Tự thiết kế bộ poster, ấn phẩm tuyển dụng bằng Canva; viết content đăng tuyển đa nền tảng thu hút ứng viên trẻ.",
        "pj.c5title": "Điều phối dự án Marketing",
        "pj.c5desc": "Bắt đầu bằng nghề viết content thuê năm 2022, đến 2025 tôi chuyển hẳn sang vai trò đầu mối: làm việc trực tiếp với khách hàng từ báo giá đến nghiệm thu, phân việc và giám sát team 1–4 người. Đã bàn giao 4 dự án, 1 dự án đang chạy.",
        "pj.galleryTitle": "Minh chứng công việc",
        "pj.galleryNote": "Một số hình ảnh thực tế: database ứng viên, kế hoạch tuyển dụng, báo cáo, sự kiện đã tổ chức (thông tin nhạy cảm đã được che).",

        "ct.chip": "Sẵn sàng cho cơ hội mới", "ct.title": "Liên hệ",
        "ct.desc": "Cảm ơn anh/chị đã xem đến đây — vậy là hồ sơ của tôi qua vòng sàng lọc rồi nhỉ? Mọi kênh liên hệ đều ở ngay bên dưới, quyền chủ động xin nhường anh/chị. Còn tôi thì... ngồi sẵn cạnh điện thoại rồi 😉",
        "ct.call": "Gọi điện", "ct.linkedin": "Hồ sơ chuyên môn",
        "ct.photoChip": "Đứng chờ điện thoại từ chiều",

        "ft.made": "HR Generalist & Talent Acquisition",

        "meta.desc": "Portfolio của Võ Thanh Công — HR Generalist & Talent Acquisition với 3+ năm kinh nghiệm tuyển dụng, vận hành nhân sự và ứng dụng AI vào HR."
    },

    en: {
        "nav.home": "Home", "nav.about": "About", "nav.expertise": "Expertise",
        "nav.journey": "Journey", "nav.skills": "Skills", "nav.projects": "Projects", "nav.contact": "Contact",

        "hero.eyebrow": "Hi there, I'm",
        "hero.role": "HR Generalist & Talent Acquisition",
        "hero.tagline": "3+ years building teams for businesses — from recruitment and HR operations to company culture. An early adopter of AI (ChatGPT, Claude, Gemini) to make HR workflows faster and smarter.",
        "hero.downloadCv": "Download CV (PDF)", "hero.contact": "Get in touch",
        "hero.statYears": "Years of experience", "hero.statCompanies": "Companies across industries", "hero.statHires": "Successful hires",
        "hero.pipe1": "Open to work", "hero.pipe2": "3+ years in HR", "hero.pipe3": "Replies within 24h",

        "about.chip": "About me", "about.title": "About",
        "about.heading": "Connecting the right people with the right business goals",
        "about.p1": "I graduated in Human Resource Management from the University of Economics – University of Danang, and started my recruitment career while still a student, as a remote Talent Acquisition Leader for an IT company. Over the past 3+ years I have worked at FPT Telecom, Fish Golden, COF Incorporate and COWI Group, growing from intern to HR Generalist in charge of the full employee lifecycle, across telecom, FMCG and e-commerce. Most of them were startups, where I built the HR function from the ground up — an experience that taught me to take on hard problems without waiting for a paved road.",
        "about.p2": "To me, the value of an HR professional lies in three things: selecting the right people, building the right policies, and retaining talent for the organization. I actively apply AI (ChatGPT, Claude, Gemini) to daily work — from writing JDs and screening resumes to compiling reports — significantly cutting processing time. In addition, coordinating freelance Marketing projects since 2022 gives me a practical understanding of Marketing roles, helping me assess candidates more accurately when recruiting.",
        "about.emailLabel": "Email", "about.phoneLabel": "Phone", "about.langLabel": "Languages",
        "about.langValue": "Vietnamese, English",
        "about.interestLabel": "Also good at", "about.interestValue": "MC & ice-breaking, content, basic design",

        "exp.chip": "What I do", "exp.title": "Expertise",
        "exp.c1title": "Recruitment & Headhunt",
        "exp.c1desc": "50+ successful hires from staff to manager level: Sales, ABM, Sales/Marketing managers, Marketing teams (Content, Designer, Editor, VJ), Livestream, Customer Service, BO, Sales Admin... Led the Cowi Works headhunt project.",
        "exp.c2title": "Performance & Operations",
        "exp.c2desc": "Weekly performance monitoring, timekeeping and payroll support, contributing to company policies and regulations, labor records and office asset management.",
        "exp.c3title": "Culture & Events",
        "exp.c3desc": "Building company culture and onboarding processes; organizing birthdays, team building and internal events — often as the event MC myself.",
        "exp.c4title": "AI in HR",
        "exp.c4desc": "Applying ChatGPT, Claude and Gemini to daily work: writing JDs, screening resumes, recruitment content and reporting — saving significant processing time.",

        "jn.chip": "Education & Experience", "jn.title": "Journey",
        "jn.cdfRole": "Talented Sales Supervisor competition",
        "jn.cdfSum": "Passed the selection round of Unilever's CDF competition. Joined to experience a multinational's candidate assessment process from the applicant's seat — invaluable first-hand material for a recruiter.",
        "jn.cdfTag": "Passed selection",
        "jn.j1sum": "Owning the entire HR function, working directly with the CEO and all departments.",
        "jn.j1b1": "Planned and recruited Digital Marketing and BO roles; sourced via Facebook and LinkedIn; built a candidate database and evaluated channel effectiveness.",
        "jn.j1b2": "Led Cowi Works — a Marketing headhunt and staffing project: prospecting clients and negotiating service contracts.",
        "jn.j1b3": "Weekly performance monitoring; timekeeping and payroll support; contributed to company policies and regulations.",
        "jn.j1b4": "Maintained company culture activities, onboarding and offboarding.",
        "jn.j2sum": "Covered both recruitment and HR administration for an e-commerce company.",
        "jn.j2b1": "Recruited BO, Livestream and TikTok Affiliate roles via Facebook, Zalo, LinkedIn, Threads and TikTok; screened, interviewed and completed probation reviews.",
        "jn.j2b2": "Built onboarding processes and company culture; organized birthdays and team building for staff.",
        "jn.j2b3": "Designed recruitment posters with Canva.",
        "jn.j2b4": "Timekeeping and payroll, reward policies, office asset and equipment management.",
        "jn.j3sum": "High-volume recruitment for the Cosmetics – FMCG industry.",
        "jn.j3b1": "Recruited BO, Mass and Sales roles via Facebook, LinkedIn and Zalo; explored new candidate sources with weekly recruitment reports.",
        "jn.j3b2": "Resume screening, phone screening, interviews and probation assessment.",
        "jn.j3b3": "Organized birthdays and team building; supported office asset management.",
        "jn.j4role": "HR Administration Intern",
        "jn.j4sum": "First hands-on experience in a large corporate environment.",
        "jn.j4b1": "Supported job postings, resume screening, phone screening and candidate care for interviews.",
        "jn.j4b2": "Maintained recruitment trackers and monthly reports; supported expense claims, quotations and equipment management.",
        "jn.j5sum": "Led a remote IT recruitment team while still a final-year student.",
        "jn.j5b1": "Recruitment leader for IT positions: planning, sourcing and monthly reporting.",
        "jn.j5b2": "Co-developed processes and policies; trained new team members.",
        "jn.eduSchool": "University of Economics – University of Danang",
        "jn.eduMajor": "B.A. in Human Resource Management",
        "jn.eduSum": "Executive board of the Business Administration Faculty Youth Union: organized freshman team building, camps and winter volunteer programs; led organizing committees for charity and extracurricular activities.",
        "jn.eduTag1": "Youth Union", "jn.eduTag2": "Committee Leader",

        "sk.chip": "My toolbox", "sk.title": "Skills",
        "sk.g1": "HR Expertise",
        "sk.g1i1": "Multi-channel sourcing", "sk.g1i1d": "Facebook, LinkedIn, Zalo, TikTok, Threads",
        "sk.g1i2": "Interview & assessment", "sk.g1i2d": "Phone screening, interviews, probation reviews",
        "sk.g1i3": "HR admin & basic C&B", "sk.g1i3d": "Timekeeping, payroll support, labor records",
        "sk.g1i4": "Processes & policies", "sk.g1i4d": "Onboarding, company regulations",
        "sk.g2": "Tools",
        "sk.g2exceld": "Timekeeping, payroll, data reports",
        "sk.g2wordd": "Contracts, documents, process docs",
        "sk.g2pptd": "Training decks, internal presentations",
        "sk.g2canvad": "Recruitment posters, media materials",
        "sk.g3": "AI Stack",
        "sk.g3i1d": "JDs, emails, recruitment content",
        "sk.g3i2d": "Resume analysis, process documentation",
        "sk.g3i3d": "Report synthesis, market research",
        "sk.g3i4": "AI-powered workflow", "sk.g3i4d": "Automating repetitive tasks, faster processing",

        "pj.chip": "Proof of work", "pj.title": "Projects",
        "pj.c1desc": "Led a Marketing headhunt & staffing project at COWI Group: prospecting clients, negotiating service contracts, and operating a candidate pool for urgent hiring needs.",
        "pj.c2title": "Candidate database",
        "pj.c2desc": "Built and managed a centralized candidate database; measured each sourcing channel to optimize cost and time-to-hire.",
        "pj.c3title": "Internal events", "pj.c3tag": "Events",
        "pj.c3desc": "Planned and ran birthday, team building and welcome events across multiple companies — often as the event MC myself.",
        "pj.c4title": "Recruitment creatives",
        "pj.c4desc": "Designed recruitment posters and materials with Canva; wrote multi-platform job posts that attract young candidates.",
        "pj.c5title": "Marketing project coordination",
        "pj.c5desc": "Started as a freelance content writer in 2022; by 2025 I had moved into the lead role: working directly with clients from quotation to delivery, assigning and supervising a team of 1–4. Four projects delivered, one currently running.",
        "pj.galleryTitle": "Work evidence",
        "pj.galleryNote": "Real snapshots of my work: candidate databases, hiring plans, reports and organized events (sensitive information redacted).",

        "ct.chip": "Open to new opportunities", "ct.title": "Contact",
        "ct.desc": "Thank you for reading this far — I take it my profile just passed your screening round? Every contact channel is right below, and the next move is all yours. As for me... I'm already sitting by the phone 😉",
        "ct.call": "Call me", "ct.linkedin": "Professional profile",
        "ct.photoChip": "Been waiting here since noon",

        "ft.made": "HR Generalist & Talent Acquisition",

        "meta.desc": "Portfolio of Vo Thanh Cong — HR Generalist & Talent Acquisition with 3+ years of experience in recruitment, HR operations and AI-powered HR workflows."
    }
};

/* ---------- 2. Gallery minh chứng ----------
   Cách thêm ảnh: bỏ file vào thư mục gallery/ rồi thêm 1 dòng vào mảng dưới.
   category: "database" | "plan" | "report" | "event" | "design"
   Ví dụ:
   { src: "gallery/ke-hoach-q1.jpg", category: "plan",
     captionVi: "Kế hoạch tuyển dụng Q1/2025", captionEn: "Q1/2025 hiring plan" },
   ⚠️ Nhớ che/làm mờ thông tin cá nhân của ứng viên trước khi upload. */
const galleryItems = [
    {
        src: "gallery/dashboard-bao-cao.png", category: "report",
        captionVi: "Dashboard báo cáo tuyển dụng 7 tuần: 152 ứng viên → 20 tuyển thành công, time-to-fill trung bình 20,4 ngày",
        captionEn: "7-week recruitment dashboard: 152 candidates → 20 hires, average time-to-fill of 20.4 days"
    },
    {
        src: "gallery/database-ung-vien.png", category: "database",
        captionVi: "Thống kê database ứng viên theo trạng thái, nguồn và vị trí ứng tuyển",
        captionEn: "Candidate database statistics by status, source and applied position"
    },
    {
        src: "gallery/checklist-onboarding.png", category: "plan",
        captionVi: "Checklist onboarding nhân viên mới: từ trước ngày nhận việc đến mốc đánh giá 90 ngày",
        captionEn: "New-hire onboarding checklist: from pre-boarding to the 90-day review milestone"
    },
    {
        src: "gallery/thong-tin-ung-vien.png", category: "plan",
        captionVi: "Biểu mẫu thông tin ứng viên chuẩn hóa cho quy trình phỏng vấn",
        captionEn: "Standardized candidate information form for the interview process"
    },
    {
        src: "gallery/quy-che-luong.png", category: "plan",
        captionVi: "Quy chế lương, thưởng cho nhân viên — văn bản tôi tham gia soạn thảo",
        captionEn: "Company salary & reward policy — a document I helped draft"
    },
    {
        src: "gallery/noi-quy-lao-dong.png", category: "plan",
        captionVi: "Nội quy lao động công ty — tham gia xây dựng và ban hành",
        captionEn: "Company labor regulations — contributed to drafting and issuance"
    }
];

const galleryCategories = {
    all: { vi: "Tất cả", en: "All" },
    database: { vi: "Database", en: "Database" },
    plan: { vi: "Kế hoạch & Quy trình", en: "Plans & Processes" },
    report: { vi: "Báo cáo", en: "Reports" },
    event: { vi: "Sự kiện", en: "Events" },
    design: { vi: "Thiết kế", en: "Design" }
};

/* ---------- 3. Ngôn ngữ ---------- */
let currentLang = localStorage.getItem("lang") || "vi";

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.getElementById("meta-desc").setAttribute("content", dict["meta.desc"]);
    document.querySelectorAll(".lang-opt").forEach(opt => {
        opt.classList.toggle("on", opt.dataset.langOpt === lang);
    });

    renderGallery();
}

document.getElementById("lang-toggle").addEventListener("click", () => {
    setLang(currentLang === "vi" ? "en" : "vi");
});

/* ---------- 4. Theme sáng / tối ---------- */
const themeIcon = document.getElementById("theme-icon");

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    themeIcon.className = theme === "dark" ? "uil uil-sun" : "uil uil-moon";
}

document.getElementById("theme-toggle").addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme")
    || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
setTheme(savedTheme);

/* ---------- 5. Menu mobile ---------- */
const mobileNav = document.getElementById("mobile-nav");
document.getElementById("menu-toggle").addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});
mobileNav.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => mobileNav.classList.remove("open"));
});

/* ---------- 6. Active nav theo vị trí cuộn ---------- */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
            });
        }
    });
}, { rootMargin: "-45% 0px -50% 0px" });

sections.forEach(s => sectionObserver.observe(s));

/* ---------- 7. Reveal khi cuộn ---------- */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("shown");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ---------- 8. Counter ở hero ---------- */
function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll("[data-count]").forEach(el => counterObserver.observe(el));

/* ---------- 9. Gallery + lightbox ---------- */
let galleryFilter = "all";

function renderGallery() {
    const block = document.getElementById("gallery-block");
    if (galleryItems.length === 0) { block.hidden = true; return; }
    block.hidden = false;

    // Chỉ hiện tab của những category thực sự có ảnh
    const usedCats = ["all", ...Object.keys(galleryCategories).filter(c =>
        c !== "all" && galleryItems.some(item => item.category === c))];
    if (!usedCats.includes(galleryFilter)) galleryFilter = "all";

    const tabs = document.getElementById("gallery-tabs");
    tabs.innerHTML = "";
    usedCats.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "gallery-tab" + (cat === galleryFilter ? " active" : "");
        btn.textContent = galleryCategories[cat][currentLang];
        btn.addEventListener("click", () => { galleryFilter = cat; renderGallery(); });
        tabs.appendChild(btn);
    });

    const grid = document.getElementById("gallery-grid");
    grid.innerHTML = "";
    galleryItems
        .filter(item => galleryFilter === "all" || item.category === galleryFilter)
        .forEach(item => {
            const caption = currentLang === "vi" ? item.captionVi : item.captionEn;
            const card = document.createElement("button");
            card.className = "gallery-item";
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = caption;
            img.loading = "lazy";
            const cap = document.createElement("span");
            cap.className = "gallery-caption";
            cap.textContent = caption;
            card.append(img, cap);
            card.addEventListener("click", () => openLightbox(item.src, caption));
            grid.appendChild(card);
        });
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
}

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });

/* ---------- Khởi động ---------- */
setLang(currentLang);
