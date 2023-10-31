<script>
    export let ModalTitle, ModalBody, ModalCTA, ModalId;
</script>

<div>
    <!-- Button to Open the Modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#{ModalId}">{ModalCTA}</button>
    
    <!-- The Modal -->
    <div class="modal fade" id={ModalId}>
        <div class="modal-dialog">
            <div class="modal-content text-dark">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">{ModalTitle}</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
        
                <!-- Modal body -->
                <div class="modal-body">
                    <p>{ModalBody}</p>
                </div>
        
                <!-- Modal footer -->
                <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>

<style></style>