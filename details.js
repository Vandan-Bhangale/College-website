let back = document.querySelector(".back");

let cardDetail = {
    1 : ` <!--Main detail container-->
    <div class="detailContainer">
      <!--Summary container-->
      <div class="summaryContainer">
      <button class="back"><i class="fa-solid fa-arrow-left" style="color: #ff4500;"></i><span>Back</span></button>
        <!--Summary detail container-->
        <div class="summaryDetails">
          <h5>Diploma in Civi Engineering</h5>

          <div class="heading">
            <h1>
              <span>Groundbreaking Skills,</span> <br />
              Built to
              <span style="font-weight: 500; font-style: italic">Last.</span>
            </h1>

            <p class="summary">
              Start your path to designing enduring structures with a Diploma in
              Civil Engineering.
            </p>
          </div>

          <div class="details">
            <p>
              <i class="fa-regular fa-calendar" style="color: #f0d551"></i>
              <span> 3 Years</span>
            </p>
            <p>
              <i class="fa-regular fa-clock" style="color: #ffd43b"></i>
              <span> Full Time</span>
            </p>
          </div>

          <button class="applybtn">Apply Now</button>
        </div>
        <!--Summary details container ends here-->

        <!--Image container ends here-->
        <div class="imgContainer">
          <div class="imgHolder">
            <img src="./clgimg/std-1.webp" alt="Student image" />
          </div>
        </div>
        <!--Image container ends here-->
      </div>
      <!--Summary container ends here-->

      <!--About course section-->
      <div class="about">
        <h3>About Course</h3>

        <!--Paragraph section div-->
        <div class="detailPara">
        <p class="aboutDetails">One of the oldest and the most impactful disciplines, civil engineering influences the environments in which we live, work, and connect. As civil engineers, we work on roads and bridges as well as on the urban skylines of our world. It’s a field of passion and purpose converging to innovate that stands the test of time. <br> <br>

            Raisoni Education’s Diploma in Civil Engineering has been created to impart the right skills to the next generation of problem solvers. A theoretical foundation combined with hands-on training from our industry experts committed to student success is what we offer in our curriculum. We make lasting connections with students, parents, and industry partners, making sure our graduates are equipped to enter the job market confidently. Come with us and start a path that will let you shape your vision, your skill, and your commitment and leave a lasting mark on society.</p>
        
            <img src="./clgimg/kimba-2.webp" alt="Lion Image">
        </div>
        <!--Paragrph section div ends here-->
      </div>
      <!--About course section ends here-->
      
      <!--Objective section-->
      <div class="objective">
        <h3>Objectives of the Program</h3>

        <!--Object list-->
        <div class="objlists">
        <div class="objlist1">
            <ul class="list">
                <li>Learn to develop skills to create effective construction plans and project execution with accuracy and care.</li>
                <li>Establishes the basic knowledge of structures, geotechnical systems, and water resources system management.</li>
                <li>Role leadership qualities for a position in the construction or development of infrastructure.</li>
            </ul>
        </div>
        <!--Objective list 1 ends here-->

        <div class="objlist2">
            <ul class="list">
                <li>Familiarise yourself with modern engineering: master your essential tools and techniques of modern engineering.</li>
                <li>Internships, hands-on projects, and simulations will help you acquire real-world experience.</li>
            </ul>
        </div>
        <!--objective list 2 ends here-->
        </div>
        <!--Object list div ends here-->
      </div>
      <!--objective section ends here-->

      <!--important details-->
      <div class="keydetails">
        <h2>Key Details</h2>

        <div class="boxContainer">
            <div class="box">
                <i class="fa-regular fa-calendar" style="color: #ff4500;"></i>
                <p>
                    Three Year (3) course with two
                    <span class="block">semesters in a year.</span>
                </p>
            </div>
            <!--first box ends here-->

            <div class="box">
                <i class="fa-solid fa-chalkboard-user" style="color: #ff4500;"></i>
                <p>
                    Innovative teaching &
                    <span class="block">learning environment.</span>
                </p>
            </div>
            <!--second box ends here-->

            <div class="box">
                <i class="fa-solid fa-handshake" style="color: #ff4500;"></i>
                <p>
                    Industrial visits &
                    <span class="block">Expert lectures.</span>
                </p>
            </div>
            <!--Third box ends here-->

            <div class="box">
                <i class="fa-solid fa-flask-vial" style="color: #ff4500;"></i>
                <p>
                    Industry-standard
                    <span class="block">well-equipped labs.</span>
                </p>
            </div>
            <!--fourth box ends here-->

            <div class="box">
                <i class="fa-solid fa-award" style="color: #ff4500;"></i>
                <p>
                    100% Gaurantee of
                    <span class="block">placements.</span>
                </p>
            </div>
            <!--fifth box ends here-->

        </div>
        <!--box container ends here-->
      </div>
      <!--Important details div ends here-->

      <!--Future div-->
      <div class="scope">
        <h2>Future of Civil Engineers</h2>

        <div class="scopeboxContainer">
            <div class="scopebox">
                <span>₹7,00,000</span><i class="fa-solid fa-hand-holding-dollar" style="color: #ff4500;"></i>
                <p>In India, professionals with 5+ years of experience earn varying salaries based on location, company, and individual knowledge.</p>
            </div>
            <!--First box ends here-->
            <div class="scopebox">
                <span>30% market Growth</span><i class="fa-solid fa-arrow-up-right-dots" style="color: #ff4500;"></i>
                <p>According to a report by Global Market Insights, the global market is projected to grow at a CAGR of 30% by 2026.</p>
            </div>
            <!--second box ends here-->
            <div class="scopebox">
                <span>1.8 million Jobs</span><i class="fa-solid fa-users" style="color: #ff4500;"></i>
                <p>1.8 Million Job Opportunities worldwide for experienced professionals.</p>
            </div>
            <!--Third box ends here-->
        </div>
        <!--Scope box container ends here-->
      </div>
      <!--future div ends here-->

    </div>
    <!--Main detail container ends here-->`
};

function goBack() {
    document.querySelectorAll("body > *").forEach(el => el.style.display = "");
    document.querySelector(".content").innerHTML = ""; // Clear card details
}

document.addEventListener("click", (e) => {
    if (e.target.closest(".back")) {
        console.log("back is pressed");
        goBack();
    }
});
