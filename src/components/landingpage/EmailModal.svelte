<script>
    let email = "example@email.com";
    let message = "Your message... (optional)";

    const joinEmailList = () => {
        if (email !== "") {
            
        }
    }
</script>

<!-- Modal for email collection -->
<div class="modal fade" id="emailCollection">
    <div class="modal-dialog">
        <div class="modal-content text-dark">
            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title"><strong>Join Our Email List?</strong></h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <p>Want us to reach out to you, have any questions? Join our email list for a <u>free</u> consultation!</p>

                <div class="form-group">
                    <label for="email">Email address*:</label>
                    <input type="email" class="form-control" bind:value={email} id="email">
                </div>
                <div class="form-group">
                    <label for="msg">Question/Message:</label>
                    <input type="text" class="form-control" bind:value={message} id="msg">
                </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-primary btn-block" on:click={joinEmailList}>Submit</button>
                <button type="button" class="btn btn-danger btn-block" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<style>
    label { font-weight: bold; }
</style>