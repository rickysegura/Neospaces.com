<script>
    // your script goes here
</script>

<nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color:black">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a class="navbar-brand" href="#Neospaces">
      <img src="logo.jpg" alt="logo" style="width:60px;" class="rounded">
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#Neospaces">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#About">OUR TEAM</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Services">OUR SERVICES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#demo">OUR DESIGN PROCESS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Portfolio">PORTFOLIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contact">CONTACT US</a>
        </li>
        <li class="nav-item">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="nav-link" data-toggle="modal" data-target="#frequentQuestions" id="FAQbtn">FAQ</a>
        </li>
      </ul>
    </div>  
</nav>

<style>
  #FAQbtn:hover { cursor: pointer; }
</style>