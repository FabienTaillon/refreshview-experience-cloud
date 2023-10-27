echo '##### CREATING SCRATCH ORG #####'
sf org create scratch --definition-file config/project-scratch-def.json --alias refreshview-experience-cloud --set-default
echo '##### PUSHING METADATA #####'
sf project deploy start --target-org refreshview-experience-cloud
echo '##### ASSIGNING PERMISSIONS #####'
sf force user permset assign --perm-set-name RefreshView_Demo --target-org refreshview-experience-cloud
echo '##### PUBLISHING EXPERIENCE CLOUD SITE #####'
sf community publish --name RefreshView --target-org refreshview-experience-cloud
echo '##### OPENING SCRATCH ORG #####'
sf org open --path /lightning/app/c__RefreshView_Demo --target-org refreshview-experience-cloud