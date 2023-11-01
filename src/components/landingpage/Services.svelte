<script>
    import CustomDesign from "./Services/CustomDesign.svelte";
    import WebManage from "./Services/WebManage.svelte";
    import CustomSquarespace from "./Services/CustomSquarespace.svelte";
    import CustomWix from "./Services/CustomWix.svelte";
    import CustomWordpress from "./Services/CustomWordpress.svelte"
</script>

<div id="Services" class="mt-4">
    <div class="container">
        <h1 class="display-3">OUR SERVICES</h1>
        <hr class="border">
    </div>

    <!-- Custom web design -->
    <CustomDesign />

    <!-- Website management and maintenance -->
    <WebManage />
    
    <!-- Custom web design w/ Squarespace -->
    <CustomSquarespace />
    
    <!-- Custom web design w/ Wix -->
    <CustomWix />
    
    <!-- Custom web design w/ WordPress -->
    <CustomWordpress />
</div>

<style></style>