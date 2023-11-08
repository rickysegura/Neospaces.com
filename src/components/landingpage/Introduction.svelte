<script>
    let isFlipped = false;
    const handleKeyPoints = () => {
        if (isFlipped == true) {
            isFlipped = false;
            document.getElementById("down").style.display = "inline";
            document.getElementById("up").style.display = "none";
        } else {
            isFlipped = true;
            document.getElementById("down").style.display = "none";
            document.getElementById("up").style.display = "inline";
        }
    }
</script>

<div id="Intro" class="mt-4 container">
    <h1 class="display-3">Welcome to Neospaces: Your Gateway to Digital Success</h1>
    <hr class="border">

    <!-- Intro copy -->
    <p>In today's fast-paced digital landscape, a powerful online presence is no longer a luxury; it's a necessity. At Neospaces, we understand that for small businesses, having a professionally designed and developed website is a game-changer. Based in the vibrant heart of Los Angeles, we specialize in creating modern, responsive websites that transcend geographical boundaries.</p>
    <p>With Neospaces, you can expect more than just a website. You'll gain a partner committed to your success, offering high conversion rates, in-depth data analytics, and unwavering support. Let's unlock the full potential of your online presence together.</p>
    
    <!-- Intro important points -->
    <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#keyPoints" on:click={handleKeyPoints}>Why You Need Professional Web Design <i class="fa-solid fa-circle-chevron-down" id="down"></i><i class="fa-solid fa-circle-chevron-up" id="up"></i></button>
    <div id="keyPoints" class="collapse mt-3">
        <h2><strong>Your Website Matters:</strong></h2>
        <p>In a world where connections are forged through screens, your website is your business's gateway to the world. It's not just a digital storefront; it's your 24/7 salesperson, showcasing your products and services to potential customers across the globe.</p>

        <h2><strong>Standing Out, Rising Above:</strong></h2>
        <p>In a sea of options, a professionally crafted website is your beacon. It's the mark of a business that values excellence, that goes the extra mile to offer a seamless experience. It's what sets you apart from the competition, leaving a lasting impression on visitors.</p>

        <h2><strong>Unlock Your Potential:</strong></h2>
        <p>Let us empower your business with a website that not only looks exceptional but also performs brilliantly. With Neospaces, your digital presence won't just be a site; it'll be a dynamic force driving your business forward.</p>

        <a href="#Services"><button type="button" class="btn btn-primary">Explore Our Services</button></a>
    </div>
</div>

<style>
    h1 { text-transform: uppercase; }
    #up { display: none; }
</style>