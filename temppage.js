<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Temp Page</title>
    <style>
    body {
        .display {
            display: flex;
            width: 1920px;
            padding-bottom: 270px;
            flex-direction: column;
            align-items: center;
            gap: 190px;
        }

        /* Text styles */
        .color {
            color: #e6ecef;
            font-size: 16px;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 30px;
            word-wrap: break-word;
        }

        .subject {
            color: #e6ecef;
            font-size: 12px;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 30px;
            word-wrap: break-word;
        }

        .name {
            color: #eaeff4;
            font-size: 80px;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 30px;
            word-wrap: break-word;
        }

        .location {
            color: #e6f2f4;
            font-size: 52px;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 78px;
            word-wrap: break-word;
        }

        .job-title {
            color: #e6f2f4;
            font-size: 40px;
            font-family: 'Poppins';
            font-weight: 700;
            line-height: 60px;
            word-wrap: break-word;
        }

        /* Button styles */
        .button-projects,
        .button-profile {
            color: white;
            font-size: 16px;
            font-family: 'Poppins';
            font-weight: 400;
            word-wrap: break-word;
        }

        /* Container styles */
        .container {
            width: 100%;
            height: 100%;
            padding-bottom: 270px;
            background: black;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 190px;
            display: flex;
        }

        .image {
            width: 500px;
            height: 500px;
            background: #d9d9d9;
        }

        .button-group {
            height: 257px;
            padding-top: 8px;
            padding-bottom: 8px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4px;
            display: flex;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="name">Michael Que</h1>
        <h2 class="location">San Francisco, CA</h2>
        <p class="job-title">Project and Program Management</p>
        <div class="display">
            <div class="image"></div>
            <div class="button-group">
                <button class="button-projects">The Projects</button>
                <button class="button-profile">My Profile</button>
            </div>
        </div>
    </div>
</body>
</html>
