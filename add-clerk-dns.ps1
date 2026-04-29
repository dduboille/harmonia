$token = "cfut_usjEyecxXqPG97PHhkKIiW4Ecoxl9DPfusAglZiU42bebb6e"
$zoneId = "9dfe64566136a3f6ff6270bbeea64a3a"
$headers = @{Authorization="Bearer $token"; "Content-Type"="application/json"}

# clerk
Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method POST -Headers $headers -Body '{"type":"CNAME","name":"clerk","content":"frontend-api.clerk.services","ttl":1,"proxied":false}'

# accounts
Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method POST -Headers $headers -Body '{"type":"CNAME","name":"accounts","content":"accounts.clerk.services","ttl":1,"proxied":false}'

# clkmail
Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method POST -Headers $headers -Body '{"type":"CNAME","name":"clkmail","content":"mail.a42uzkqi9fym.clerk.services","ttl":1,"proxied":false}'

# clk._domainkey
Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method POST -Headers $headers -Body '{"type":"CNAME","name":"clk._domainkey","content":"dkim1.a42uzkqi9fym.clerk.services","ttl":1,"proxied":false}'

# clk2._domainkey
Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method POST -Headers $headers -Body '{"type":"CNAME","name":"clk2._domainkey","content":"dkim2.a42uzkqi9fym.clerk.services","ttl":1,"proxied":false}'