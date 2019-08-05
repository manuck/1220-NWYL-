<template>
</template>

<script type="text/javascript">
// opener.document.getElementById("p_id").value = "c_val";

$("#p_id", opener.document).val("c_val");
$(opener.document).find("#p_id").val("c_val");
</script>
