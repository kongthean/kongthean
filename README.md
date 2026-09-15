<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kong Thean</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            background-color: #0f172a;
            color: #f8fafc;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 24px;
        }
        .card {
            background-color: #1e293b;
            border: 1px solid #334155;
            border-radius: 16px;
            max-width: 480px;
            width: 100%;
            padding: 32px 24px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }
        .profile {
            text-align: center;
            margin-bottom: 24px;
        }
        .profile h1 {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 6px;
        }
        .profile p {
            font-size: 14px;
            color: #94a3b8;
        }
        .form-group {
            margin-bottom: 16px;
            text-align: left;
        }
        label {
            display: block;
            font-size: 13px;
            color: #cbd5e1;
            margin-bottom: 6px;
            font-weight: 500;
        }
        input, textarea {
            width: 100%;
            padding: 12px;
            background-color: #0f172a;
            border: 1px solid #334155;
            border-radius: 8px;
            color: #ffffff;
            font-size: 14px;
            outline: none;
        }
        input:focus, textarea:focus {
            border-color: #38bdf8;
        }
        textarea {
            resize: vertical;
            min-height: 100px;
        }
        button {
            width: 100%;
            padding: 14px;
            background-color: #0284c7;
            color: #ffffff;
            font-weight: 600;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 15px;
            transition: background 0.2s;
        }
        button:hover {
            background-color: #0369a1;
        }
        .direct-email {
            text-align: center;
            margin-top: 20px;
            font-size: 13px;
            color: #64748b;
        }
        .direct-email a {
            color: #38bdf8;
            text-decoration: none;
        }
    </style>
</head>
<body>

    <div class="card">
        <div class="profile">
            <h1>Kong Thean</h1>
            <p>Official Contact & Communication Portal</p>
        </div>

        <form action="mailto:info@kongthean.com" method="post" enctype="text/plain">
            <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="Name" placeholder="Enter your full name" required>
            </div>

            <div class="form-group">
                <label for="email">Your Email Address</label>
                <input type="email" id="email" name="Reply-To" placeholder="name@example.com" required>
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="Message" placeholder="How can we help you?" required></textarea>
            </div>

            <button type="submit">Send Message</button>
        </form>

        <div class="direct-email">
            Or email directly to <a href="mailto:info@kongthean.com">info@kongthean.com</a>
        </div>
    </div>

</body>
</html>
