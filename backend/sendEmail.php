<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'vendor/autoload.php';

// Handle preflight CORS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit(0);
}

// Allow CORS for actual requests
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Reject non-POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method Not Allowed"]);
    exit;
}

// Read and validate JSON input
$rawInput = file_get_contents("php://input");

if (empty($rawInput)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "No input received"]);
    exit;
}

$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid JSON"]);
    exit;
}

// Extract fields
$firstName = $data["firstName"] ?? '';
$lastName = $data["lastName"] ?? '';
$company = $data["company"] ?? '';
$email = $data["email"] ?? '';
$message = $data["message"] ?? '';
$referral = $data["referral"] ?? '';

// Prepare PHPMailer
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'noshaiautomation@gmail.com';
    $mail->Password = 'cgtg vyos ncsg hgdj';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('noshaiautomation@gmail.com', 'Logic Work');
    $mail->addAddress('noshaiautomation@gmail.com');

    // ✅ Only add reply-to if email is valid
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail->addReplyTo($email, "$firstName $lastName");
    }

    $mail->Subject = "New Contact Submission from $firstName $lastName";
    $mail->Body = <<<BODY
Name: $firstName $lastName
Company: $company
Email: $email
Message: $message
Referred by: $referral
BODY;

    $mail->send();
    echo json_encode(["success" => true]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => $mail->ErrorInfo]);
}
