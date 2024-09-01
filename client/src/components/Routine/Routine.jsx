import "./Routine.css"

const Routine = () => {
  return (
    <section className='Routine'>
        <div className="container">
        <div className="faqTitle text-center mt-5 mb-4 wow fadeInUp">
         <span>আমাদের ক্লাসের সময়সূচী</span> 
         </div>
          <div className="row">
            <h4 className="text-body-secondary text-center">ব্যাচঃ এইস.এস.সি-২০২৫ ব্যাচ রুটিন</h4>
            <div className="col-lg-12 wow fadeInDown">
            <table className='textFormetting'>
            <thead className="fs-4 routineTHead">
                    <tr>
                        <th className="bg-info" colSpan={3}>এইস.এস.সি-২০২৫ ব্যাচ রুটিন</th>   
                    </tr>
                    <tr>
                        <th>বার</th>
                        <th>সময়</th>
                        <th>যে অধ্যায় পড়ানো হবে</th>
                    </tr>
                </thead>
                <tbody className="fs-5 routineTBody">
                    <tr>
                        <td rowSpan={3}>শনি-সোম-বুধ:</td>
                        <td>সকাল ৮-৯ টা </td>
                        <td>আগামী ০৭ সেপ্টেম্বর (শনিবার) ৪র্থ অধ্যায় শুরু হবে</td>
                    </tr>
                    <tr>
                        
                        <td>বিকেল ৩-৪ টা </td>
                        <td>আগামী ২৪ আগস্ট (শনিবার) ৪র্থ অধ্যায় শুরু হবে</td>
                    </tr>
                    <tr>
                        
                        <td>বিকেল ৫-৬ টা </td>
                        <td>আগামী ১৯ আগস্ট (সোমবার) ৩.১ অধ্যায় শুরু হবে</td>
                    </tr>
                    <tr>
                        <td rowSpan={3} className="bg-white">রবি-মঙ্গল-বৃহ:</td>
                        <td>সকাল ৮-৯ টা </td>
                        <td>আগামী ০১ সেপ্টেম্বর (রবিবার) ১ম অধ্যায় শুরু হবে</td>
                    </tr>
                    <tr>
                        
                        <td>বিকেল ২-৩ টা </td>
                        <td>আগামী ২০ আগস্ট (মঙ্গলবার) ৪র্থ অধ্যায় শুরু হবে</td>
                    </tr>
                    <tr>
                        
                        <td>বিকেল ৪-৫ টা </td>
                        <td>আগামী ২২ আগস্ট (বৃহস্পতিবার) ১ম অধ্যায় শুরু হবে</td>
                    </tr>
                </tbody>
    </table>
          <div className="text-center routineFooter lh-1">
              <p className="fs-5">যে কোন তথ্যের জন্য: <label className="text-primary"> +8801818301681</label> এই নাম্বারে মেসেজ করুন।</p>
              <p className="text-danger fs-5">[! বি.দ্র. -- প্রয়োজনে রুটিন পরিবর্তন হতে পারে]</p>
              <p className="fs-5">অনলাইনে ফ্রি ক্লাস ও পরীক্ষা দিতে ভিজিট করুন: <a className="text-primary text-decoration-underline" href="http://www.ictshikkha.com" target="_blank" rel="noreferrer">www.ictshikkha.com</a></p>
              <p className="text-end fs-6">[সর্বশেষ আপডেট - ২৭ আগস্ট, ২০২৪]</p>
          </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Routine