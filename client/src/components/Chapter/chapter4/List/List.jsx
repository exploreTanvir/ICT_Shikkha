import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Chpt4SubDetail } from '../../../chapterSub/Chpt4Sub/Chpt4SubDetail'
import Editor from '../../../Editor/Editor'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../../chapter1/GlobalVillage/GlobalVillage.css"

const List = () => {
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
            <h1>চতুর্থ অধ্যায়</h1>
            <h3>ওয়েব ডিজাইন পরিচিতি ও HTML</h3>
            <h3>তালিকা (List)</h3>
        </div>

        <h4 className='mt-4'><b>ক্রমবিহীন তালিকা (Unordered List) : </b></h4>

        <p>ওয়েব পেজের কোন কন্টেন্টকে তালিকা বা লিস্ট(List) আকারে সাজানো যায়। ক্রম বিহীন (Unordered) কোন লিস্ট তৈরি করতে ul ট্যাগ ব্যবহার করা হয়। ul ট্যাগের ‘u’ এবং ‘l’  বর্ণদুটি  যথাক্রমে ‘unordered’ এবং ‘List’ শব্দদুটিকে নির্দেশ করে। </p>
        <p>কোন তালিকায় অন্তর্ভুক্ত বিষয়বস্তুগুলোই হলো সেই তালিকার আইটেম (items) । প্রতিটি আইটেমকে li ট্যাগের ভেতরে লেখা হয়। li ট্যাগের ‘l’ ও ‘i’ বর্ণদুটি যথাক্রমে ও ‘List’ ও ‘Item’ শব্দদুটিকে নির্দেশ করে। ক্রম বিহীন তালিকায় এইসব লিস্ট আইটেমগুলোর শুরুতে ul ও  একদম শেষে /ul  লেখা হয়। </p>
        
        <p>ক্রম বিহীন তালিকা (Unordered List) -এর ব্যবহার নিচের ictShikkha  -এর html  viewer -এ দেখানো হলো।</p>
        <p>sup ও sub ট্যাগের ব্যবহার নিচে ictShikkha -এর html viewer এ দেখানো হলো।  <br/><br/>
        <i className='text-primary'>[[নিজেদের মত Edit করে তার আউটপুটও দেখে নিতে পারো যা তোমাদের ভালোভাবে বুঝতে সহায়ক হবে। ] ]</i>
        </p>
        
        
        <Editor cText="" jsText=""  text={`<!DOCTYPE html>
                        <html>
                        <head>
                            <title>ictShikkha</title>
                        </head>
                        <body>
                            <ul>
                                <li>চাল</li>
                                <li>ডাল</li>
                                <li>তেল</li>
                                <li>মরিচ</li>
                                <li>লবন</li>
                            </ul>
                        </body>
                        </html>`}/>
        

        <h4 className='mt-4'><b>ক্রমবিহীন তালিকার ধরণ : </b></h4>

        <p>ক্রমবিহীন তালিকা (Unordered List) – এর সকল আইটেমগুলোর সামনে প্রথাগতভাবে চাকতি (Disc) বা  বুলেট পয়েন্ট ‘ ⬤ ‘ প্রদর্শন করে। তবে আমরা এই চিহ্নটির পরিবর্তে ব্যবহৃত বৃত্তাকার(Circle) ‘ 〇 ‘ ও বর্গাকার(Square) ‘ ◼️ ‘  চিহ্ন প্রদর্শন করতে পারি।</p>
        <p>‘type’ অ্যাট্রিবিউট ব্যবহার করে আমরা এইসব চিহ্ন প্রদর্শন করতে পারবো। ‘type’ অ্যাট্রিবিউট এর ভ্যালু ‘disc’ , ‘circle’ এবং ‘square’ লিখলে যথাক্রমে চাকতি, বৃত্তাকার ও বর্গাকার চিহ্ন প্রদর্শন করবে।</p>
        
        
        <p>ক্রম বিহীন তালিকায় ‘type’ অ্যাট্রিবিউট –এর ব্যবহার নিচের ictShikkha -এর html viewer এ দেখানো হলো।  <br/><br/>
        <i className='text-primary'>[নিজেদের মত Edit করে তার আউটপুটও দেখে নিতে পারো যা তোমাদের ভালোভাবে বুঝতে সহায়ক হবে। ] </i>
        </p>
        
        
        <Editor text={`<!DOCTYPE html>
    <html>
    <head>
        <title>ictoons</title>
    </head>
    <body>
        <ul type="disc">
            <li>চাল</li>
            <li>ডাল</li>
            <li>তেল</li>
        </ul>
        <ul type="circle">
            <li>চাল</li>
            <li>ডাল</li>
            <li>তেল</li>
        </ul>
        <ul type="square">
            <li>চাল</li>
            <li>ডাল</li>
            <li>তেল</li>
        </ul>
    </body>
    </html>
    `}/>
        <h4 className='mt-4'><b>ক্রমযুক্ত তালিকা (Ordered List) : </b></h4>

        <p>ক্রম যুক্ত (Ordered) কোন লিস্ট তৈরি করতে ol ট্যাগ ব্যবহার করা হয়। ol ট্যাগের ‘o’ এবং ‘l’  বর্ণদুটি  যথাক্রমে ‘Ordered’ এবং ‘List’ শব্দদুটিকে নির্দেশ করে। </p>
        <p>কোন তালিকায় অন্তর্ভুক্ত বিষয়বস্তুগুলোই হলো সেই তালিকার আইটেম (items) । প্রতিটি আইটেমকে li ট্যাগের ভেতরে লেখা হয়। li ট্যাগের ‘l’ ও ‘i’ বর্ণদুটি যথাক্রমে ও ‘List’ ও ‘Item’ শব্দদুটিকে নির্দেশ করে। ক্রমযুক্ত তালিকায় এইসব লিস্ট আইটেমগুলোর শুরুতে ol ও  একদম শেষে ol  লেখা হয়।</p>
        
        
        <p>ক্রমযুক্ত তালিকা (Ordered List) -এর ব্যবহার নিচের  ictShikkha -এর html viewer এ দেখানো হলো।  <br/><br/>
        <i className='text-primary'>[নিজেদের মত Edit করে তার আউটপুটও দেখে নিতে পারো যা তোমাদের ভালোভাবে বুঝতে সহায়ক হবে। ] </i>
        </p>
        
        
        <Editor text={`<!DOCTYPE html>
<html>
<head>
	<title>ictoons</title>
</head>
<body>
	<ol>
		<li>চাল</li>
		<li>ডাল</li>
		<li>তেল</li>
		<li>মরিচ</li>
		<li>লবন</li>
	</ol>
</body>
</html>
    `}/>
        <h4 className='mt-4'><b>ক্রমযুক্ত তালিকার ধরণ : </b></h4>

        <p>ক্রমিক তালিকা (Ordered List) – এর সকল আইটেমগুলোর সামনে প্রথাগতভাবে ক্রম হিসেবে ইংরেজি সংখ্যা (1,2,3…) প্রদর্শন করে। তবে আমরা রোমান সংখ্যা (i,ii,ii…) কিংবা বর্ণক্রম (a,b,c…) হিসেবেও প্রদর্শন করতে পারি।</p>
        <p>‘type’ অ্যাট্রিবিউট ব্যবহার করে আমরা এইসব চিহ্ন প্রদর্শন করতে পারবো। ‘type’ অ্যাট্রিবিউট এর ভ্যালু ‘1’ , ‘i’ এবং ‘a’ লিখলে যথাক্রমে ইংরেজি সংখ্যা, রোমান সংখ্যা ও ইংরেজি বর্ণক্রম ক্রমানুসারে প্রদর্শন করবে।</p>
        
        
        <p>ক্রমিক তালিকায় ‘type’ অ্যাট্রিবিউট –এর ব্যবহার নিচের ictShikkha -এর html viewer এ দেখানো হলো।  <br/><br/>
        <i className='text-primary'>[নিজেদের মত Edit করে তার আউটপুটও দেখে নিতে পারো যা তোমাদের ভালোভাবে বুঝতে সহায়ক হবে। ] </i>
        </p>
        
        
        <Editor text={`<!DOCTYPE html>
<html>
<head>
	<title>ordered list type</title>
</head>
<body>
	<ol type = "A" >
		<li>chal</li>
		<li>dal</li>
		<li>oil</li>
			<ol type= "i" >
				<li>soyabin </li>
				<li>olive </li>
			</ol>
		<li>morich</li>
		  	<ol type= "1" >
				<li>kacha </li>
				<li>shukna </li>
			</ol>
		<li>lobon</li>
	</ol>
</body>
</html>
    `}/>
        <h4 className='mt-4'><b>নেস্টেড লিস্ট : </b></h4>

        <p>কোন লিস্টের উপাদান (item) হিসেবে যদি লিস্টই থাকে তখন আমরা একে নেস্টেড লিস্ট (Nested List) বলি। অর্থাৎ নেস্টেড লিস্ট হলো এমন একটি লিস্ট যার ভেতরেও লিস্ট থাকে। </p>
        <p>কোন লিস্টের item হিসেবে ক্রম, ক্রমবিহীন কিংবা উভয় প্রকার লিস্টই থাকতে পারে। </p>
        
        
        <p>নেস্টেড লিস্ট –এর ব্যবহার নিচের ictShikkha -এর html viewer এ দেখানো হলো।  <br/><br/>
        <i className='text-primary'>[নিজেদের মত Edit করে তার আউটপুটও দেখে নিতে পারো যা তোমাদের ভালোভাবে বুঝতে সহায়ক হবে। ] </i>
        </p>
        
        
        <Editor text={`<!DOCTYPE html>
<html>
<head>
	<title>Nested List</title>
</head>
<body>
   <ul type = "disc">
	 <li>chal</li>
	 <li>dal</li>
	 <li>oil</li>
	     <ul type= "circle">
		   <li>soyabin oil</li>
		   <li>olive oil</li>
	     </ul>
	 <li>morich</li>
	     <ul type= "square">
		   <li>kacha morich</li>
		   <li>shukna morich</li>
	     </ul>
	 <li>lobon</li>
   </ul>
</body>
</html>

    `}/>
                        
                </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
                {
      Chpt4SubDetail.map((item,index)=>{
        return(
          <Link key={index} to={item.name} className="mb-4">
             <h4 className='chapterOne'>{item.title}</h4>
          </Link>
        )
      })
    }
                </div>
                </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
        </div>
  )
}

export default List