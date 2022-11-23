
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>

<!-- Add Firebase products that you want to use -->
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="app.js?v="<?php echo date('U') ?> ></script>
<h1> Received Push Succeed!!! </h1>

<button onclick="get_token();"> get token </button> 

<button onclick="gen_curl();"> get curl </button> 

<hr>
<p> 
    <h2> Get Token: <br/> </h2>
    <label id="my_token">  </label>
</p>
 
<p> 
    <h2> Command <br/> </h2>
    <label id="curl_command">  </label>
</p>

<p>
    <h2> Message: </h2> 
    <label id="message" style="color: red" ></label>  
</p>

</body>
</html>