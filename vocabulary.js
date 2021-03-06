var questionList = [
	{question:'absorb', answer:'ซึมซับ'},
	{question:'abuse', answer:'การละเมิด'},
	{question:'adjacent', answer:'ติดกัน'},
	{question:'adjustment', answer:'การปรับ'},
	{question:'admiring', answer:'ที่เลื่อมใส'},
	{question:'admixture', answer:'ส่วนผสม'},
	{question:'adulteretion', answer:'การเจือปน'},
	{question:'aerosol', answer:'ละอองในอากาศ'},
	{question:'aggravate', answer:'ซ้ำเติม'},
	{question:'aggressive', answer:'ก้าวร้าว'},
	{question:'allusion', answer:'การพาดพิง'},
	{question:'ambitious', answer:'ทะเยอทะยาน'},
	{question:'amend', answer:'แก้ไข'},
	{question:'analyze', answer:'วิเคราะห์'},
	{question:'announce', answer:'ประกาศ'},
	{question:'anthropogenic', answer:'กิจกรรมของมนุษย์'},
	{question:'anticipating', answer:'ที่คาดการณ์ไว้'},
	{question:'argumentation', answer:'การโต้แย้ง'},
	{question:'assimilate', answer:'ดูดซึม'},
	{question:'attest', answer:'ยืนยัน'},
	{question:'attribute', answer:'คุณลักษณะ'},
	{question:'authentic', answer:'แท้จริง'},
	{question:'baked', answer:'อบ'},
	{question:'baker', answer:'คนทำขนมปัง'},
	{question:'beneath', answer:'ใต้'},
	{question:'beyond', answer:'เกิน'},
	{question:'bravery', answer:'ความกล้าหาญ'},
	{question:'brewer', answer:'คนต้มเบียร์'},
	{question:'bribery', answer:'การกินสินบน'},
	{question:'bureaucrat', answer:'ข้าราชการ'},
	{question:'butcher', answer:'คนขายเนื้อ'},
	{question:'cheapen', answer:'ลดราคา'},
	{question:'chronicle', answer:'ประวัติการณ์'},
	{question:'clarify', answer:'อธิบาย'},
	{question:'closure', answer:'การปิด'},
	{question:'color', answer:'ทาสี'},
	{question:'comfort', answer:'ความสะดวกสบาย'},
	{question:'command', answer:'คำสั่ง'},
	{question:'comparison', answer:'การเปรียบเทียบ'},
	{question:'competitive', answer:'การแข่งขัน'},
	{question:'complain', answer:'บ่น'},
	{question:'complication', answer:'โรคแทรกซ้อน'},
	{question:'compromise', answer:'ประนีประนอม'},
	{question:'concern', answer:'กังวล'},
	{question:'condemn', answer:'กล่าวโทษ'},
	{question:'confident', answer:'มั่นใจ'},
	{question:'connect', answer:'เชื่อมต่อ'},
	{question:'cram', answer:'อัด'},
	{question:'creature', answer:'สิ่งมีชีวิต'},
	{question:'crucial', answer:'สำคัญมาก'},
	{question:'cultivated', answer:'การเพาะปลูก'},
	{question:'debase', answer:'ลดตำแหน่ง'},
	{question:'debasing', answer:'น่าสงสาร'},
	{question:'define', answer:'กำหนด'},
	{question:'description', answer:'ลักษณะ'},
	{question:'destroy', answer:'ทำลาย'},
	{question:'determine', answer:'กำหนด'},
	{question:'development', answer:'พัฒนาการ'},
	{question:'devise', answer:'ประดิษฐ์'},
	{question:'differ', answer:'แตกต่าง'},
	{question:'diffuse', answer:'กระจาย'},
	{question:'dire', answer:'หายนะ'},
	{question:'discipline', answer:'วินัย'},
	{question:'displacement', answer:'การกำจัด'},
	{question:'display', answer:'แสดง'},
	{question:'dissipate', answer:'กระจายไป'},
	{question:'dissolve', answer:'ละลาย'},
	{question:'distend', answer:'โป่งพอง'},
	{question:'doubt', answer:'สงสัย'},
	{question:'dweller', answer:'ผู้อยู่อาศัย'},
	{question:'eager', answer:'กระตือรือร้น'},
	{question:'easiness', answer:'ความสะดวกสบาย'},
	{question:'ebb', answer:'การลดลง'},
	{question:'effect', answer:'ผล'},
	{question:'efficient', answer:'ที่มีประสิทธิภาพ'},
	{question:'elevate', answer:'ยกขึ้น'},
	{question:'elevating', answer:'การยกขึ้น'},
	{question:'embed', answer:'ฝัง'},
	{question:'emission', answer:'การส่งออก'},
	{question:'encourage', answer:'ส่งเสริม'},
	{question:'endeavor', answer:'ความพยายาม'},
	{question:'enforcement', answer:'การบังคับใช้'},
	{question:'enthusiastic', answer:'กระตือรือร้น'},
	{question:'eradication', answer:'การกำจัด'},
	{question:'establish', answer:'สร้าง'},
	{question:'evolution', answer:'วิวัฒนาการ'},
	{question:'exacerbate', answer:'ทำให้รุนแรง'},
	{question:'excavate', answer:'ขุดค้น'},
	{question:'exchange', answer:'แลกเปลี่ยน'},
	{question:'expenditure', answer:'รายจ่าย'},
	{question:'explicit', answer:'ชัดเจน'},
	{question:'fairness', answer:'ความเป็นธรรม'},
	{question:'falsehood', answer:'การโกหก'},
	{question:'famine', answer:'ความอดอยาก'},
	{question:'faulty', answer:'ความผิดพลาด'},
	{question:'fertility', answer:'ภาวะเจริญพันธุ์'},
	{question:'fine', answer:'ละเอียด'},
	{question:'flare', answer:'เปลวไฟ'},
	{question:'flavor', answer:'รส'},
	{question:'flood', answer:'น้ำท่วม'},
	{question:'foresee', answer:'คาด'},
	{question:'forgiveness', answer:'การให้อภัย'},
	{question:'fortune', answer:'โชคลาภ'},
	{question:'fraudulent', answer:'หลอกลวง'},
	{question:'frustrate', answer:'อึดอัด'},
	{question:'grievence', answer:'ข้อข้องใจ'},
	{question:'grips', answer:'จับ'},
	{question:'harmful', answer:'เป็นอันตราย'},
	{question:'heat', answer:'ความร้อน'},
	{question:'hectic', answer:'น่าตื่นเต้น'},
	{question:'heroic', answer:'กล้าหาญ'},
	{question:'honest', answer:'ซื่อสัตย์'},
	{question:'humble', answer:'อ่อนน้อมถ่อมตน'},
	{question:'ignore', answer:'ไม่สนใจ'},
	{question:'imaginative', answer:'จินตนาการ'},
	{question:'incident', answer:'อุบัติการณ์'},
	{question:'incorruptible', answer:'ไม่เน่าเปื่อย'},
	{question:'indifferent', answer:'ไม่แยแส'},
	{question:'indigenous', answer:'ชนพื้นเมือง'},
	{question:'ineffective', answer:'ไม่ได้ผล'},
	{question:'inferior', answer:'ด้อยกว่า'},
	{question:'infuse', answer:'ใส่'},
	{question:'ingredient', answer:'ส่วนผสม'},
	{question:'initiative', answer:'ความคิดริเริ่ม'},
	{question:'injury', answer:'ความเสียหาย'},
	{question:'inquiry', answer:'การสอบสวน'},
	{question:'inspire', answer:'บันดาลใจ'},
	{question:'institute', answer:'สถาบัน'},
	{question:'intentional', answer:'โดยเจตนา'},
	{question:'interest', answer:'ดอกเบี้ย'},
	{question:'interpret', answer:'ตีความ'},
	{question:'interstate', answer:'ระหว่างรัฐ'},
	{question:'intruding', answer:'บุกรุก'},
	{question:'inundate', answer:'เจิ่ง'},
	{question:'invention', answer:'การประดิษฐ์'},
	{question:'investigate', answer:'สอบสวน'},
	{question:'ironic', answer:'แดกดัน'},
	{question:'irrelevant', answer:'ที่ไม่เกี่ยวข้อง'},
	{question:'jerking', answer:'กระตุก'},
	{question:'judgment', answer:'การตัดสินใจ'},
	{question:'kindness', answer:'ความเมตตา'},
	{question:'knowledge', answer:'ความรู้'},
	{question:'lacking', answer:'ขาดแคลน'},
	{question:'lament', answer:'ความเศร้าโศก'},
	{question:'legend', answer:'ตำนาน'},
	{question:'legion', answer:'พยุหะ'},
	{question:'lose', answer:'สูญเสีย'},
	{question:'lurking', answer:'ที่ซุ่มซ่อน'},
	{question:'man-made', answer:'ที่มนุษย์สร้างขึ้น'},
	{question:'miscalculate', answer:'คาดผิด'},
	{question:'modification', answer:'การแก้ไข'},
	{question:'movement', answer:'การเคลื่อนไหว'},
	{question:'narration', answer:'การบรรยาย'},
	{question:'novel', answer:'นวนิยาย'},
	{question:'nudge', answer:'ดุน'},
	{question:'obligation', answer:'ภาระผูกพัน'},
	{question:'obsession', answer:'ความคิดครอบงำ'},
	{question:'obstacle', answer:'อุปสรรค'},
	{question:'oppression', answer:'การกดขี่'},
	{question:'optimistic', answer:'ในแง่ดี'},
	{question:'outrage', answer:'ข่มขืน'},
	{question:'overcrowding', answer:'ทำให้แน่นเกินไป'},
	{question:'particle', answer:'อนุภาค'},
	{question:'patience', answer:'ความอดทน'},
	{question:'patriotic', answer:'ด้วยความรักชาติ'},
	{question:'penalty', answer:'การลงโทษ'},
	{question:'perpetuate', answer:'ขยายเวลา'},
	{question:'pollute', answer:'ก่อให้เกิดมลพิษ'},
	{question:'pollution', answer:'มลพิษ'},
	{question:'portray', answer:'วาดภาพ'},
	{question:'possibly', answer:'อาจจะ'},
	{question:'powerhouse', answer:'โรงไฟฟ้า'},
	{question:'precipitation', answer:'การเร่งรัด'},
	{question:'proceed', answer:'ดำเนิน'},
	{question:'promise', answer:'คำมั่นสัญญา'},
	{question:'prosecution', answer:'การฟ้องร้อง'},
	{question:'prosper', answer:'เจริญ'},
	{question:'protruding', answer:'โหนก'},
	{question:'prove', answer:'พิสูจน์'},
	{question:'provoke', answer:'กระตุ้น'},
	{question:'provoking', answer:'ยั่ว'},
	{question:'qualm', answer:'ความประหวั่นพรั่นพรึง'},
	{question:'receipt', answer:'ใบเสร็จรับเงิน'},
	{question:'receipts', answer:'รายรับ'},
	{question:'reduce', answer:'ลด'},
	{question:'reform', answer:'ปฏิรูป'},
	{question:'regulation', answer:'การควบคุม'},
	{question:'reliance', answer:'ความเชื่อมั่น'},
	{question:'removal', answer:'การถอด'},
	{question:'reputable', answer:'มีชื่อเสียง'},
	{question:'revenue', answer:'รายได้'},
	{question:'rigid', answer:'เข้มงวด'},
	{question:'road rage', answer:'โกรธถนน'},
	{question:'sanction', answer:'อนุมัติ'},
	{question:'satisfactory', answer:'น่าพอใจ'},
	{question:'scant', answer:'ขาดแคลน'},
	{question:'security', answer:'ความปลอดภัย'},
	{question:'shadow', answer:'เงา'},
	{question:'shortage', answer:'ความขาดแคลน'},
	{question:'skeptical', answer:'ไม่เชื่อ'},
	{question:'smog', answer:'ควันหมอก'},
	{question:'solidarity', answer:'ความเป็นน้ำหนึ่งใจเดียวกัน'},
	{question:'sphere', answer:'รูปทรงกลม'},
	{question:'stabilize', answer:'ทำให้มีเสถียรภาพ'},
	{question:'stall', answer:'แผงลอย'},
	{question:'standpoint', answer:'จุดยืน'},
	{question:'statute', answer:'พระราชบัญญัติ'},
	{question:'stormy', answer:'ดุเดือด'},
	{question:'stressful', answer:'เครียด'},
	{question:'struggling', answer:'การดิ้นรน'},
	{question:'substance', answer:'สสาร'},
	{question:'substitution', answer:'การแทน'},
	{question:'sufficient', answer:'เพียงพอ'},
	{question:'superstitious', answer:'เชื่อโชคลาง'},
	{question:'supervision', answer:'การดูแล'},
	{question:'suspicious', answer:'พิรุธ'},
	{question:'taboo', answer:'ข้อห้าม'},
	{question:'temper', answer:'อารมณ์'},
	{question:'temptation', answer:'สิ่งล่อใจ'},
	{question:'territorial', answer:'ดินแดน'},
	{question:'therapist', answer:'นักบำบัดโรค'},
	{question:'transformation', answer:'การแปลง'},
	{question:'treatment', answer:'การรักษา'},
	{question:'tribute', answer:'ส่วย'},
	{question:'undertaking', answer:'กิจการ'},
	{question:'uneasiness', answer:'ความไม่สบายใจ'},
	{question:'valuable', answer:'มีคุณค่า'},
	{question:'vehicle', answer:'พาหนะ'},
	{question:'violation', answer:'การละเมิด'},
	{question:'vocation', answer:'อาชีพ'},
	{question:'ware', answer:'เครื่องปั้นดินเผา'},
	{question:'welfare', answer:'สวัสดิการ'},
	{question:'worthy', answer:'คุ้มค่า'}
];
