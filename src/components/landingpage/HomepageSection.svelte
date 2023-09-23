<script>
    import Modal from "../modals/Modal.svelte";
    export let imgSource, sectionTitle, sectionDescription, sectionBody, sectionCTA, ModalName;
</script>

<div id="FreeHosting" class="row mb-4">
    <div class="col-md-4 text-center">
        <img src={imgSource} alt="Computer servers" class="rounded">
    </div>

    <div class="col-md-8">
        <div class="container">
            <h2>{sectionTitle}</h2>
            <p>{sectionDescription}</p>
            
            <Modal ModalTitle={sectionTitle} ModalCTA={sectionCTA} ModalId={ModalName} ModalBody={sectionBody} />
        </div>
    </div>
</div>

<style>
    img {
        max-height: 150px;
    }
</style>