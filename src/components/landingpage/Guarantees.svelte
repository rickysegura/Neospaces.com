<script>
    let isFlipped = false;
    const handleGuarantees = () => {
        if (isFlipped == true) {
            isFlipped = false;
            document.getElementById("downGuarantee").style.display = "inline";
            document.getElementById("upGuarantee").style.display = "none";
        } else {
            isFlipped = true;
            document.getElementById("downGuarantee").style.display = "none";
            document.getElementById("upGuarantee").style.display = "inline";
        }
    }
</script>

<div class="mt-4 container">
    <h1 class="display-3">OUR GUARANTEE</h1>
    <hr class="border">

    <p>At Neospaces, we believe in setting the highest standards for our services. Our guarantees are a testament to our commitment to delivering unparalleled web design and management solutions.</p>

    <!-- Guarantee dropdown -->
    <button type="button" class="btn btn-primary btn-block" data-toggle="collapse" data-target="#guaranteeList" on:click={handleGuarantees}>Over 10 Guarantees <i class="fa-solid fa-circle-chevron-down" id="downGuarantee"></i><i class="fa-solid fa-circle-chevron-up" id="upGuarantee"></i></button>
    <div id="guaranteeList" class="collapse mt-3">
        <div>
            <div>
                <h4><strong>1. Satisfaction Beyond Measure:</strong></h4>
                <p>We stand by our work, ensuring your satisfaction with every aspect of your project. We're dedicated to working closely with you until your vision is realized, making revisions and adjustments to exceed your expectations.</p>
            </div>
    
            <div>
                <h4><strong>2. Timely Delivery, Every Time:</strong></h4>
                <p>Time is of the essence, and we promise a seamless and timely delivery of your project. Our clear timelines for each phase ensure you can plan with confidence.</p>
            </div>
    
            <div>
                <h4><strong>3. Responsive Design Excellence:</strong></h4>
                <p>Your website will shine on every screen. We guarantee responsive design, providing a flawless user experience across devices, from desktops to tablets and mobile phones.</p>
            </div>
    
            <div>
                <h4><strong>4. Quality Assurance Commitment:</strong></h4>
                <p>Before your website goes live, we commit to rigorous quality assurance testing. Our goal is a website that not only looks exceptional but functions flawlessly for your users.</p>
            </div>
    
            <div>
                <h4><strong>5. Security Assurance:</strong></h4>
                <p>Trust in the security of your website. We guarantee the implementation of robust measures to protect your digital space, ensuring a safe environment for you and your users.</p>
            </div>
    
            <div>
                <h4><strong>6. Post-Launch Support:</strong></h4>
                <p>Our commitment extends beyond the launch. With our post-launch support guarantee, we're here to address any issues and provide assistance with updates or changes.</p>
            </div>
    
            <div>
                <h4><strong>7. Performance Excellence:</strong></h4>
                <p>Your website will meet and exceed performance benchmarks. We guarantee optimal load times, contributing to an exceptional user experience and enhanced SEO.</p>
            </div>
    
            <div>
                <h4><strong>8. Comprehensive Content Management Training:</strong></h4>
                <p>Empower yourself with our guarantee of comprehensive training on the content management system (CMS). Managing and updating your website will be seamless and stress-free.</p>
            </div>
    
            <div>
                <h4><strong>9. SEO Optimization Assurance:</strong></h4>
                <p>Enhance your visibility with our guarantee of implementing basic SEO best practices during the design and development process.</p>
            </div>
    
            <div>
                <h4><strong>10. Compatibility Across Platforms:</strong></h4>
                <p>Your website will be compatible across different browsers and devices. Our guarantee ensures a consistent and reliable experience for your users.</p>
            </div>
    
            <div>
                <h4><strong>11. Transparent Pricing Structure:</strong></h4>
                <p>Trust in transparent pricing. Our guarantee ensures clear communication about costs and any potential additional fees.</p>
            </div>
    
            <div>
                <h4><strong>12. Ownership of Intellectual Property:</strong></h4>
                <p>You own your digital assets. Our guarantee ensures that you have full ownership of the intellectual property rights to your website.</p>
            </div>
    
            <div>
                <h4><strong>13. Open Communication Commitment:</strong></h4>
                <p>Expect open and transparent communication throughout. Our guarantee is your assurance of staying informed about project progress and promptly addressing any inquiries.</p>
            </div>
    
            <div>
                <h4><strong>14. Data Security and Backup:</strong></h4>
                <p>Your data is safe with us. Our guarantee includes regular backups and a plan for data recovery in case of unexpected issues.</p>
            </div>
    
            <p>At Neospaces, your confidence is our priority. Our guarantees are the foundation of a partnership focused on your success.</p>
            <a href="#Services"><button type="button" class="btn btn-primary">Explore Our Services with Confidence</button></a>
        </div>
    </div>

    <!-- Save money -->
    <h2 class="mt-2 display-4">Save Money With Neospaces</h2>
    <p class="text-secondary">Save <em>hundreds</em> each year by switching your hosting to Neospaces!</p>
    <div class="table-responsive">
        <table class="table table-dark table-hover shadow rounded">
            <thead>
            <tr>
                <th>Host</th>
                <th>Their Price</th>
                <th>Our Price</th>
                <th>We Save You</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Squarespace</td>
                <td>$16<sub class="text-secondary">/month</sub> - $49<sub class="text-secondary">/month</sub></td>
                <td>$10<sub class="text-secondary">/month</sub></td>
                <td>$72<sub class="text-secondary">/year</sub> - $468<sub class="text-secondary">/year</sub></td>
            </tr>
            <tr>
                <td>Wix</td>
                <td>$16<sub class="text-secondary">/month</sub> - $159<sub class="text-secondary">/month</sub></td>
                <td>$10<sub class="text-secondary">/month</sub></td>
                <td>$72<sub class="text-secondary">/year</sub> - $1,788<sub class="text-secondary">/year</sub></td>
            </tr>
            <tr>
                <td>WordPress</td>
                <td>$25<sub class="text-secondary">/month</sub> - $45<sub class="text-secondary">/month</sub></td>
                <td>$10<sub class="text-secondary">/month</sub></td>
                <td>$180<sub class="text-secondary">/year</sub> - $420<sub class="text-secondary">/year</sub></td>
            </tr>
            </tbody>
        </table>
    </div>

    <p class="text-secondary">Need a more authentic design and affordable hosting? Get a free domain transfer to Neospaces Web Hosting with our <a href="#customDesign">Tailored Web Design</a> solution!</p>
    <!-- Save money end -->
</div>

<style>
    #upGuarantee { display: none; }
</style>