<script>
    import CustomDesign from "./Services/CustomDesign.svelte";
    import WebHosting from "./Services/WebHosting.svelte";
    import WebManage from "./Services/WebManage.svelte";
    import CustomSquarespace from "./Services/CustomSquarespace.svelte";
    import CustomShopify from "./Services/CustomShopify.svelte";
    import CustomWix from "./Services/CustomWix.svelte";
    import CustomWordpress from "./Services/CustomWordpress.svelte"
</script>

<div id="Services" class="mt-4">
    <div class="container">
        <h1 class="display-3">OUR SERVICES</h1>
        <hr class="border">
    </div>

    <!-- Web hosting -->
    <WebHosting/>

    <!-- Website management and maintenance -->
    <WebManage/>
    
    <!-- Custom web design w/ Squarespace -->
    <CustomSquarespace/>
    
    <!-- Custom web design w/ Wix -->
    <CustomWix/>
    
    <!-- Custom web design w/ WordPress -->
    <CustomWordpress/>

    <!-- Custom web design w/ Shopify -->
    <CustomShopify/>

    <!-- Custom web design -->
    <CustomDesign/>
</div>

<style></style>