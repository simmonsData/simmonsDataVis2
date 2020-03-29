export default {
    title: "Engineering Out-Of-Class Activity Survey",
    pages: [
        {
            name: "consentPage",
            elements: [
                {
                    type: "panel",
                    name: "panel3",
                    elements: [
                        {
                            type: "html",
                            name: "consentText",
                            html: "<p>Study Title: Investigating Co-Curricular Participation of Students Underrepresented in Engineering</p>\n\n\n<p>Researchers: Anh Chau</p>\n<h4><u>Consent Information and Directions</u></h4><p>Do you participate in any activities? If so, I would like to know more about these activities. You are invited to participate in a research study that seeks to learn about students’ experiences from participating in various activities, called co/extracurricular activities, which occur outside of taking courses.</p><h4><u>Consent Information</u></h4><p>The information you provide will be used to help college and university administrators and faculty improve out of class experiences and students' ability to benefit from such experiences. It may also identify links between participation in out of class activities and commitment to engineering majors and careers.</p><p>It should take about 20 minutes to complete the survey. Persons who complete the survey will be entered into a drawing for ten (10) $25 Amazon gift cards. The odds of winning are 1 in 200.  To enter the drawing, please add your name and contact information at the end of the survey.  You are not required to enter the drawing.</p><p>There are no right or wrong answers. However, please choose your response options carefully. There are no known risks to study participants. Your responses will remain confidential. You are free to discontinue this survey at any time without  any consequences. You should be over 18 to be eligible to participate in this study. Completion of this online questionnaire will be considered as your consent to participate in this study and permission to use your data for the purposes of the study specified above.</p><p>Any questions concerning this study should be directed to Dr. Denise R. Simmons at densimm@vt.edu or (540) 553-6013. The Institutional Review Board (IRB) at Virginia Tech (VT) has approved this study. Should you have any questions or concerns about the study’s conduct or your rights as a research subject, or need to report a research-related injury or event, you may contact the VT IRB Chair, Dr. David M. Moore atmoored@vt.edu or (540) 231-4991.</p><h5><u>Directions:</u></h5><p>(1) You can use the back button to move Back and forth between pages.</p><p>(2) Hovering over words in <font color=\"blue\">blue ink</font> will display text, specifically examples of out-of-classroom activities and outcomes.</p><p><strong>(3) Clicking \"agree\" below indicates that:\n</strong>\n</p>\n<p><b>- you voluntarily agree to participate</b></p>\n<p><b>- you are at least 18 years of age</b></p>\n\n<p><b>If you do not wish to participate in the study, please decline by clicking the \"disagree\" button. </b></p><p></p>"
                        },
                        {
                            type: "dropdown",
                            name: "consentQuestion",
                            isRequired: true,
                            titleLocation: "hidden",
                            choices: [
                                {
                                    value: "agree",
                                    text: "Agree"
                                },
                                {
                                    value: "disagree",
                                    text: "Disagree"
                                }
                            ]
                        }
                    ]
                }
            ],
            navigationButtonsVisibility: "show"
        },
        {
            name: "pageAge",
            elements: [
                {
                    type: "panel",
                    name: "agePanel",
                    elements: [
                        {
                            type: "text",
                            name: "demoAge",
                            title: "Age",
                            isRequired: true,
                            inputType: "number",
                            placeHolder: "Enter your age here"
                        }
                    ],
                }]
        },
        {
            name: "page1",
            elements: [
                {
                    type: "panel",
                    name: "demographicsPanel",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "gender",
                            title: "What gender do you most identify with?",
                            isRequired: true,
                            hasOther: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Man"
                                },
                                {
                                    value: "2",
                                    text: "Woman"
                                },
                                {
                                    value: "3",
                                    text: "Trans"
                                },
                                {
                                    value: "5",
                                    text: "I don't want to respond."
                                }
                            ],
                            otherText: "Other (please specify)."
                        },
                        {
                            type: "radiogroup",
                            name: "ethnicity",
                            title: "What is your race/ethnicity? (check all that apply.)",
                            isRequired: true,
                            hasOther: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "White"
                                },
                                {
                                    value: "2",
                                    text: "American Indian or Alaskan Native"
                                },
                                {
                                    value: "3",
                                    text: "Asian"
                                },
                                {
                                    value: "4",
                                    text: "Black or African American"
                                },
                                {
                                    value: "5",
                                    text: "Hispanic, Latino or Spanish Origin"
                                },
                                {
                                    value: "6",
                                    text: "Native Hawaiian or Other Pacific Islander"
                                }
                            ],
                            otherText: "Some other race, ethnicity, or origin (please specify)"
                        }
                    ],
                    title: "General"
                }
            ]
        },


        {
            name: "page2",
            elements: [
                {
                    type: "panel",
                    name: "collegePanel",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "institution",
                            title: "What is the name of your institution?",
                            isRequired: true,
                            hasOther: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Georgia Tech"
                                },
                                {
                                    value: "2",
                                    text: "North Carolina State University"
                                },
                                {
                                    value: "3",
                                    text: "Tennessee State University"
                                },
                                {
                                    value: "4",
                                    text: "The University of Texas Rio Grande Valley / University of Texas-Pan America"
                                },
                                {
                                    value: "5",
                                    text: "Virginia Tech"
                                }
                            ],
                            otherText: "Other (please specify)"
                        },
                        {
                            type: "radiogroup",
                            name: "enrollStatus",
                            title: "What is your enrollment status as a student?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Full-time"
                                },
                                {
                                    value: "2",
                                    text: "Part-time"
                                }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "collegeYear",
                            title: "What year in college are you?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "First Year"
                                },
                                {
                                    value: "2",
                                    text: "Sophomore Year"
                                },
                                {
                                    value: "3",
                                    text: "Junior Year"
                                },
                                {
                                    value: "4",
                                    text: "Senior Year"
                                },
                                {
                                    value: "5",
                                    text: "Fifth year and beyond"
                                },
                                {
                                    value: "6",
                                    text: "Graduate student"
                                }
                            ]
                        },

                        {
                            type: "radiogroup",
                            name: "beforeFirstSemester",
                            title: "Where were you immediately before your first semester/term at this institution?",
                            isRequired: true,
                            hasOther: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "High school"
                                },
                                {
                                    value: "2",
                                    text: "Two-year college, vocational/technical school"
                                },
                                {
                                    value: "3",
                                    text: "Four-year college"
                                },
                                {
                                    value: "4",
                                    text: "Military"
                                },
                                {
                                    value: "5",
                                    text: "Working a full-time job (worked more than just the summer between high school and college -- more than 8 months)"
                                }
                            ],
                            otherText: "Other (please specify)"
                        }
                    ],
                }]
        },

        {
            name: "page3",
            elements: [
                {
                    type: "panel",
                    name: "agePanel",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "major",
                            title: "What is your major?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Science"
                                },
                                {
                                    value: "2",
                                    text: "Technology"
                                },
                                {
                                    value: "3",
                                    text: "Engineering or construction"
                                },
                                {
                                    value: "4",
                                    text: "Mathematics"
                                },
                                {
                                    value: "5",
                                    text: "Non-STEM"
                                }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "field",
                            title: "What is your specific major in Engineering or Construction?",
                            visibleIf: "{major} = '3'",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "General Engineering"
                                },
                                {
                                    value: "2",
                                    text: "Civil Engineering"
                                },
                                {
                                    value: "3",
                                    text: "Construction"
                                },
                                {
                                    value: "4",
                                    text: "Agricultural Engineering"
                                },
                                {
                                    value: "5",
                                    text: "Applied Engineering"
                                },
                                {
                                    value: "6",
                                    text: "Biomedical Engineering"
                                },
                                {
                                    value: "7",
                                    text: "Chemical Engineering"
                                },
                                {
                                    value: "8",
                                    text: "Electrical Engineering"
                                },
                                {
                                    value: "9",
                                    text: "Engineering Management"
                                },
                                {
                                    value: "10",
                                    text: "Engineering Physics"
                                },
                                {
                                    value: "11",
                                    text: "Engineering Science"
                                },
                                {
                                    value: "12",
                                    text: "Industrial Engineering"
                                },
                                {
                                    value: "13",
                                    text: "Materials Engineering"
                                },
                                {
                                    value: "14",
                                    text: "Mechanical Engineering"
                                },
                                {
                                    value: "15",
                                    text: "Nanoengineering"
                                },
                                {
                                    value: "16",
                                    text: "Nuclear Engineering"
                                },
                                {
                                    value: "17",
                                    text: "Other"
                                }
                            ],
                            choicesVisibleIf: "{major} = '3'"
                        }
                    ],
                    title: "College",
                    isRequired: true
                }
            ]
        },
        {
            name: "page4",
            elements: [
                {
                    type: "panel",
                    name: "switchPanel",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "switchFromStem",
                            title: "Did you switch to your current major from another one?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Yes, from a STEM major"
                                },
                                {
                                    value: "2",
                                    text: "Yes, from a non-STEM major"
                                },
                                {
                                    value: "3",
                                    text: "No"
                                }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "intendToSwitch",
                            title: "Do you intend to switch your current major to another one?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Yes"
                                },
                                {
                                    value: "2",
                                    text: "No"
                                }
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "intendedMajor",
                            title: "What major do you intend to switch to?",
                            visibleIf: "{intendToSwitch} = '1'",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Engineering"
                                },
                                {
                                    value: "2",
                                    text: "Non-Engineering"
                                }
                            ]
                        }
                    ],
                }]
        },
        // end of page 3

        {
            name: "page4",
            elements: [
                {
                    type: "radiogroup",
                    name: "involvedInActivity",
                    title: "Have you been involved in any out-of-classroom activities in the current/previous semesters?",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Yes"
                        },

                        {
                            value: "2",
                            text: "No"
                        }
                    ]
                }

            ],
            title: "Demographics",
            navigationButtonsVisibility: "show"
        },

        {
            name: "page5",
            visibleIf: "{involvedInActivity} = '2'",
            elements: [
                {
                    type: "panel",
                    name: "intendedActivity",
                    elements: [
                        {
                            type: "checkbox",
                            name: "activities",
                            title: "Which of the following out-of-classroom activities do you intend to participate in?(You can choose multiple items.)",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Design Competition Team"
                                },
                                {
                                    value: "2",
                                    text: "Culture, Faith, Gender, Identity"
                                },
                                {
                                    value: "3",
                                    text: "Engineering outreach support"
                                },
                                {
                                    value: "4",
                                    text: "Environmental"
                                },
                                {
                                    value: "5",
                                    text: "Film, Theatre, Visual Arts"
                                },
                                {
                                    value: "6",
                                    text: "Fraternity or Sorority, social"
                                },
                                {
                                    value: "7",
                                    text: "Fraternity or Sorority, coeducation related to your major, for instance business, engineering, or services"
                                },
                                {
                                    value: "8",
                                    text: "International experiences"
                                },
                                {
                                    value: "9",
                                    text: "Job"
                                },
                                {
                                    value: "10",
                                    text: "Living-Learning Community"
                                },
                                {
                                    value: "11",
                                    text: "Media, Publications and Journalism"
                                },
                                {
                                    value: "12",
                                    text: "Military"
                                },
                                {
                                    value: "13",
                                    text: "Music/Dance"
                                },
                                {
                                    value: "14",
                                    text: "Preprofessional"
                                },
                                {
                                    value: "15",
                                    text: "Professional Experiences"
                                },
                                {
                                    value: "16",
                                    text: "Research"
                                },
                                {
                                    value: "17",
                                    text: "Service, Public Service"
                                },
                                {
                                    value: "18",
                                    text: "Sports"
                                },
                                {
                                    value: "19",
                                    text: "Student Government"
                                },
                                {
                                    value: "20",
                                    text: "Other student clubs or organizations"
                                }
                            ]}]}],
                            navigationButtonsVisibility: "show"
                        },


                        {
                            name: "pagePrompt",
                            visibleIf: "{involvedInActivity} = '2'",
                            elements: [
                                {
                                    type: "matrix",
                                    name: "no_OCA_1to14:",
                                    title: "To what extent do you agree the following reasons could prompt you to participate in out-of-classroom activities?",
                                    isRequired: true,
                                    columns: [
                                        {value: 1, text: "Strongly Disagree"},
                                        {value: 2, text: "Disagree"},
                                        {value: 3, text: "Agree"},
                                        {value: 4, text: "Strongly Agree"}
                                    ],
                                    rows: [
                                        {
                                            value: "noOCAReason1",
                                            text: "Because I could afford the costs/expenses"
                                        },
                                        {
                                            value: "noOCAReason2",
                                            text: "Because I had the time"
                                        },
                                        {
                                            value: "noOCAReason3",
                                            text: "Because I was provided information concerning the activities"
                                        },
                                        {
                                            value: "noOCAReason4",
                                            text: "Because I agree with the goals of the organization"
                                        },
                                        {
                                            value: "noOCAReason5",
                                            text: "To be on par with other students in terms of involvement in activities"
                                        },
                                        {
                                            value: "noOCAReason6",
                                            text: "To break down barriers of any kind (i.e., religion, race, Gender, sexual orientation)"
                                        }, {
                                            value: "noOCAReason7",
                                            text: "To create positive impact on campus/community"
                                        }, {
                                            value: "noOCAReason8",
                                            text: "To follow encouragement from an advisor or faculty member"
                                        }, {
                                            value: "noOCAReason9",
                                            text: "To fulfill my personal interests"
                                        }, {
                                            value: "noOCAReason10",
                                            text: "To gain experiences that make me competitive in the job market"
                                        }, {
                                            value: "noOCAReason11",
                                            text: "To provide entertainment"
                                        }, {
                                            value: "noOCAReason12",
                                            text: "To relieve stress"
                                        }, {
                                            value: "noOCAReason13",
                                            text: "To try something new"
                                        }, {
                                            value: "noOCAReason14",
                                            text: "Because of my parents influence"
                                        }
                                    ]
                                }
                            ],
                        },


                        {
                            name: "page6",
                            visibleIf: "{involvedInActivity} = '2'",
                            elements: [
                                {
                                    type: "matrix",
                                    name: "no_OCA_15to30:",
                                    title: "To what extent do you agree the following reasons could prevent you from participating in out-of-classroom activities?",
                                    isRequired: true,
                                    columns: [
                                        {value: 1, text: "Strongly Disagree"},
                                        {value: 2, text: "Disagree"},
                                        {value: 3, text: "Agree"},
                                        {value: 4, text: "Strongly Agree"}
                                    ],
                                    rows: [
                                        {
                                            value: "noOCAReason15",
                                            text: "Cost (time and money) of joining was too high"
                                        },
                                        {
                                            value: "noOCAReason16",
                                            text: "Didn't feel supported by faculty advisor"
                                        },
                                        {
                                            value: "noOCAReason17",
                                            text: "Don't contribute to what I want to learn"
                                        },
                                        {
                                            value: "noOCAReason18",
                                            text: "Personal matters prevent me (i.e., I became pregnant, I am married, I have children, etc.)"
                                        },
                                        {
                                            value: "noOCAReason19",
                                            text: "Gender issue (i.e., awkward interactions between sexes)"
                                        },
                                        {
                                            value: "noOCAReason20",
                                            text: "I am not a \"joiner\" (i.e., value personal goals above that of the group, emphasis on personal achievement)"
                                        }, {
                                            value: "noOCAReason21",
                                            text: "Introverted personality (i.e., focus on internal thoughts, feelings)"
                                        }, {
                                            value: "noOCAReason22",
                                            text: "Lack of motivation (i.e., I do not want to join, not interesting to me)"
                                        }, {
                                            value: "noOCAReason23",
                                            text: "Lack of time, scheduling issue (i.e., great workload of the current major)"
                                        }, {
                                            value: "noOCAReason24",
                                            text: "Lack the knowledge about the opportunities (i.e., lack the information of the out of class activities)"
                                        }, {
                                            value: "noOCAReason25",
                                            text: "Lengthy, difficult membership process"
                                        }, {
                                            value: "noOCAReason26",
                                            text: "Limit to number of participants; a competitive process to join"
                                        }, {
                                            value: "noOCAReason27",
                                            text: "Possibility of negative impact"
                                        }, {
                                            value: "noOCAReason28",
                                            text: "Race/ethnicity issues (i.e., not feeling welcomed; seemed like non-inclusive environment)"
                                        }, {
                                            value: "noOCAReason29",
                                            text: "Social inertia (i.e., I joined something else and it became too hard to leave after joining)"
                                        }, {
                                            value: "noOCAReason30",
                                            text: "Family matters prevent me (e.g. my family obligations prevent me from joining, etc.)"
                                        }
                                    ]
                                }
                            ],
                        },


        {
            name: "page7",
            visibleIf: "{involvedInActivity} = '1'",
            elements: [
                {
                    type: "panel",
                    elements: [
                        {
                            type: "checkbox",
                            name: "all",
                            title: "Which of the following out-of-classroom activities have you participated in for the current/previous semesters?(You can choose multiple items.)",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "Design Competition Team"
                                },
                                {
                                    value: "2",
                                    text: "Culture, Faith, Gender, Identity"
                                },
                                {
                                    value: "3",
                                    text: "Engineering outreach support"
                                },
                                {
                                    value: "4",
                                    text: "Environmental"
                                },
                                {
                                    value: "5",
                                    text: "Film, Theatre, Visual Arts"
                                },
                                {
                                    value: "6",
                                    text: "Fraternity or Sorority, social"
                                },
                                {
                                    value: "7",
                                    text: "Fraternity or Sorority, coeducation related to your major, for instance business, engineering, or services"
                                },
                                {
                                    value: "8",
                                    text: "International experiences"
                                },
                                {
                                    value: "9",
                                    text: "Job"
                                },
                                {
                                    value: "10",
                                    text: "Living-Learning Community"
                                },
                                {
                                    value: "11",
                                    text: "Media, Publications and Journalism"
                                },
                                {
                                    value: "12",
                                    text: "Military"
                                },
                                {
                                    value: "13",
                                    text: "Music/Dance"
                                },
                                {
                                    value: "14",
                                    text: "Preprofessional"
                                },
                                {
                                    value: "15",
                                    text: "Professional Experiences"
                                },
                                {
                                    value: "16",
                                    text: "Research"
                                },
                                {
                                    value: "17",
                                    text: "Service, Public Service"
                                },
                                {
                                    value: "18",
                                    text: "Sports"
                                },
                                {
                                    value: "19",
                                    text: "Student Government"
                                },
                                {
                                    value: "20",
                                    text: "Other student clubs or organizations"
                                }
                            ]}]}],
            navigationButtonsVisibility: "show"
        },




        {
            name: "page19",
            visibleIf: "{involvedInActivity} = '1'",
            elements: [
                {
                    type: "panel",
                    name: "activitiesPanelMatrix",
                    elements: [
                        {
                            type: "matrix",
                            name: "levelAct",
                            title: "How actively have you participated in the activities you selected?",
                            columns: [
                                {
                                    value: 1,
                                    text: "Not Active At All"
                                }, {
                                    value: 2,
                                    text: "Minimally Active"
                                }, {
                                    value: 3,
                                    text: "Moderately Active"
                                }, {
                                    value: 4,
                                    text: "Highly Active"
                                }
                            ],
                            rows: [
                                {
                                    value: "levelAct1",
                                    text: "Design competition team",
                                    visibleIf: "{all} contains '1'"
                                },
                                {
                                    value: "levelAct2",
                                    text: "Culture, faith, gender, identity",
                                    visibleIf: "{all} contains '2'"
                                },
                                {
                                    value: "levelAct3",
                                    text: "Environmental",
                                    visibleIf: "{all} contains '3'"
                                },
                                {
                                    value: "levelAct4",
                                    text: "Engineering outreach support",
                                    visibleIf: "{all} contains '4'"
                                },
                                {
                                    value: "levelAct5",
                                    text: "Film, Theater, Visual Arts",
                                    visibleIf: "{all} contains '5'"
                                },
                                {
                                    value: "levelAct6",
                                    text: "Fraternity or sorority, social",
                                    visibleIf: "{all} contains '6'"
                                },
                                {
                                    value: "levelAct7",
                                    text: "Fraternity or sorority,coeducation related to your major, for instance business, engineering, or services",
                                    visibleIf: "{all} contains '7'"
                                },
                                {
                                    value: "levelAct8",
                                    text: "International experiences",
                                    visibleIf: "{all} contains '8'"
                                },
                                {
                                    value: "levelAct9",
                                    text: "Job",
                                    visibleIf: "{all} contains '9'"
                                },
                                {
                                    value: "levelAct10",
                                    text: "Living-learning community",
                                    visibleIf: "{all} contains '10'"
                                },
                                {
                                    value: "levelAct11",
                                    text: "Media, publications, and journalism",
                                    visibleIf: "{all} contains '11'"
                                },
                                {
                                    value: "levelAct12",
                                    text: "Military",
                                    visibleIf: "{all} contains '12'"
                                },
                                {
                                    value: "levelAct13",
                                    text: "Music/Dance",
                                    visibleIf: "{all} contains '13'"
                                },
                                {
                                    value: "levelAct14",
                                    text: "Pre-professional",
                                    visibleIf: "{all} contains '14'"
                                },
                                {
                                    value: "levelAct15",
                                    text: "Professional experiences",
                                    visibleIf: "{all} contains '15'"
                                },
                                {
                                    value: "levelAct16",
                                    text: "Research",
                                    visibleIf: "{all} contains '16'"
                                },
                                {
                                    value: "levelAct17",
                                    text: "Service, public service",
                                    visibleIf: "{all} contains '17'"
                                },
                                {
                                    value: "levelAct18",
                                    text: "Sports",
                                    visibleIf: "{all} contains '18'"
                                },
                                {
                                    value: "levelAct19",
                                    text: "Student government",
                                    visibleIf: "{all} contains '19'"
                                },
                                {
                                    value: "levelAct20",
                                    text: "Other student clubs & organizations. Please specify below.",
                                    visibleIf: "{all} contains '20'"
                                }
                            ]
                        },

                        {
                            type: "radiogroup",
                            name: "participationHours",
                            title: "Overall, how many hours in a week have you participated in the activities you selected?",
                            isRequired: true,
                            choices: [
                                {
                                    value: "1",
                                    text: "1-3"
                                },
                                {
                                    value: "2",
                                    text: "4-6"
                                },
                                {
                                    value: "3",
                                    text: "7-9"
                                },
                                {
                                    value: "4",
                                    text: "10-12"
                                },
                                {
                                    value: "5",
                                    text: "12+"
                                }
                            ]
                        }
                    ],
                }]
        },


        {
            name: "page20",
            visibleIf: "{involvedInActivity} = '1'",
            elements: [
                {
                    type: "radiogroup",
                    name: "participationCredit",
                    title: "Did you get course credit for participating in any out-of-classroom activity in the current/previous semesters?",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Yes"
                        },
                        {
                            value: "2",
                            text: "No"
                        }
                    ]
                },

                {
                    type: "radiogroup",
                    name: "participationPaid",
                    title: "Did you get paid for participating in any out-of-classroom activity in the current/previous semesters?",
                    isRequired: true,
                    choices: [
                        {
                            value: "1",
                            text: "Yes"
                        },
                        {
                            value: "2",
                            text: "No"
                        }
                    ]
                }],
        },


        {
            name: "page21",
            visibleIf: "{involvedInActivity} = '1'",
            questions: [
                {
                    type: "matrix",
                    name: "allOut",
                    title: "To what extent do you agree that you gained the following outcomes from your involvement in out-of-classroom activities?",
                    columns: [
                        {
                            value: 1,
                            text: "Strongly Disagree"
                        }, {
                            value: 2,
                            text: "Disagree"
                        }, {
                            value: 3,
                            text: "Agree"
                        }, {
                            value: 4,
                            text: "Strongly Agree"
                        }
                    ],
                    rows: [
                        {
                            value: "allOut1",
                            text: "Intellectual development(i.e., problem solving skills, analytical skills, critical thinking skills)"
                        },
                        {
                            value: "allOut2",
                            text: "Personal development (e.g., self-confidence, identity development, time management skills)"
                        },
                        {
                            value: "allOut3",
                            text: "Social development (e. g., awareness of social issues, treat each other fairly, and civic activism)"
                        },
                        {
                            value: "allOut4",
                            text: "Academic engagement (e. g., academic effort, active and collaborative learning, and interaction with peers and faculty)"
                        },
                        {
                            value: "allOut5",
                            text: "Social engagement (e.g., comfort in various environments and with various persons, campus involvement, and student chapters)"
                        },
                        {
                            value: "allOut6",
                            text: "Professional development (e. g., professional skills; use of communication, knowledge, technical skills, clinical reasoning, emotions, values, and reflection in daily practice; able to integrate theory and practice)"
                        },
                        {
                            value: "allOut7",
                            text: "Cross-cultural awareness (i.e., knowledge, skills, and affect/motivation that enable individuals to adapt effectively with different cultures; promoting racial understanding; socializing with people from different racial/ethnic groups)"
                        },
                        {
                            value: "allOut8",
                            text: "Civic development (e. g., working to make a difference within a community; development gained through service learning, community service, and voluntarism)"
                        },
                        {
                            value: "allOut9",
                            text: "Communication skills"
                        },
                        {
                            value: "allOut10",
                            text: "Leadership skills"
                        },
                        {
                            value: "allOut11",
                            text: "Satisfaction with the college experience (e. g., satisfaction with the major, satisfaction with the advising quality)"
                        },
                        {
                            value: "allOut12",
                            text: "Sense of belonging to college"
                        },
                        {
                            value: "allOut13",
                            text: "Opportunity to be independent"
                        },
                        {
                            value: "allOut14",
                            text: "Creativity (i.e., thinking outside the box, art, invention, innovation; ability to perceive the world in new ways, to find hidden patterns, to make connections between seemingly unrelated phenomena, and to generate solutions. Creativity involves two processes: thinking, then producing. If you have ideas, but don’t act on them, you are imaginative but not creative.)"
                        },
                        {
                            value: "allOut15",
                            text: "Global competence (i.e., acquisition of in-depth. knowledge and understanding of international issues, an appreciation of and ability to learn and work with. people from diverse linguistic and cultural backgrounds)"
                        },
                        {
                            value: "allOut16",
                            text: " Practical ingenuity/inventiveness (i.e., skill in planning, combining, and adapting in a clever way; Manner in which one identifies problems and finds solutions; skill or cleverness that allows someone to solve problems, invent things, etc.)"
                        },
                        {
                            value: "allOut17",
                            text: "Resilience and flexibility (i.e., ability to learn new things quickly, deal with changing world and apply knowledge to new problems and new contexts)"
                        },
                        {
                            value: "allOut18",
                            text: " Ethical Standards (i.e., pertaining to or dealing with morals or the principles of morality; pertaining to right and wrong in conduct. 2. being in accordance with the rules or standards for right conduct or practice, especially the standards of a profession.)"
                        },
                        {
                            value: "allOut19",
                            text: " Business and management skills (i.e., able to understand and make physical, human, and political decisions; interdependence between technology and the economic and social foundations of modern society)"
                        },
                        {
                            value: "allOut20",
                            text: "Decreased academic engagement(i.e., the degree of attention, curiosity, interest, optimism, and passion that I showed lowered)"
                        },
                        {
                            value: "allOut21",
                            text: "Academic timeline extended (extended time to graduate, i.e., because participating in study abroad, co-op, internship which add to graduate timeline)"
                        },
                        {
                            value: "allOut22",
                            text: "Consumed my time therefore my schedule was less flexible"
                        },
                        {
                            value: "allOut23",
                            text: "Consumed my time therefore my free time was reduced"
                        },
                        {
                            value: "allOut24",
                            text: "Damaged interpersonal relationships"
                        },
                        {
                            value: "allOut25",
                            text: "Decreased my GPA in college"
                        },
                        {
                            value: "allOut26",
                            text: "Increased expense"
                        },
                        {
                            value: "allOut27",
                            text: "Social development negatively impacted (i.e., social transition to the college, less open to new people)"
                        },
                        {
                            value: "allOut28",
                            text: "Declined personal health(i.e., physical health, mental health)"
                        },
                        {
                            value: "allOut29",
                            text: "Decreased social engagement"
                        },
                        {
                            value: "allOut30",
                            text: "Personal development negatively impacted (i.e., poor decision making skills)"
                        }
                    ]
                }]
        },


        {
            name: "page22",
            visibleIf: "{involvedInActivity} = '1'",
            elements: [
                {
                    type: "matrix",
                    name: "allReason_1to14",
                    title: "Reasons\n" +
                        " \n" +
                        "To what extent do you agree the following reasons prompted you to participate in out-of-classroom activities? \n" +
                        " \n" +
                        " Consider the statement: I participate in out-of-class activities because ________ [fill in a reason below].\n" +
                        " ",
                    columns: [
                        {
                            value: 1,
                            text: "Strongly Disagree"
                        }, {
                            value: 2,
                            text: "Disagree"
                        }, {
                            value: 3,
                            text: "Agree"
                        }, {
                            value: 4,
                            text: "Strongly Agree"
                        }
                    ],
                    rows: [
                        {
                            value: "allReason1",
                            text: "Because I could afford the costs/expense"
                        },
                        {
                            value: "allReason2",
                            text: "Because I had the time"
                        },
                        {
                            value: "allReason3",
                            text: "Because I was provided information concerning the activities"
                        },
                        {
                            value: "allReason4",
                            text: "Because I agree with goals of organization"
                        },
                        {
                            value: "allReason5",
                            text: "To be on par with other students in terms of involvement in activities"
                        },
                        {
                            value: "allReason6",
                            text: "To break down barriers of any kind (i.e., religion, race, Gender, sexual orientation)"
                        },
                        {
                            value: "allReason7",
                            text: "To create positive impact on campus /community"
                        },
                        {
                            value: "allReason8",
                            text: "To follow encouragement from an advisor or faculty member"
                        },
                        {
                            value: "allReason9",
                            text: "To fulfill my personal interests"
                        },
                        {
                            value: "allReason10",
                            text: "To gain experiences that make me more competitive in the job market"
                        },
                        {
                            value: "allReason11",
                            text: "To provide entertainment"
                        },
                        {
                            value: "allReason12",
                            text: "To relieve stress"
                        },
                        {
                            value: "allReason13",
                            text: "To try something new"
                        },
                        {
                            value: "allReason14",
                            text: "Because of my parents influence"
                        }
                    ]
                }],
        },


        {
            name: "page23",
            visibleIf: "{involvedInActivity} = '1'",
            elements: [{
                type: "matrix",
                name: "allReason_15to30",
                title: "Reasons\n" +
                    "\n" +
                    " \n" +
                    "\n" +
                    "To what extent do you agree the following reasons prevented you from participating in out-of-classroom activities? \n" +
                    "\n" +
                    " \n" +
                    "\n" +
                    "Consider the statement: I do not participate in out-of-class activities because ________ [fill in a reason below].",
                columns: [
                    {
                        value: 1,
                        text: "Strongly Disagree"
                    }, {
                        value: 2,
                        text: "Disagree"
                    }, {
                        value: 3,
                        text: "Agree"
                    }, {
                        value: 4,
                        text: "Strongly Agree"
                    }
                ],
                rows: [
                    {
                        value: "allReason15",
                        text: "Cost (time and money) of joining was too high"
                    },
                    {
                        value: "allReason16",
                        text: "Didn’t feel supported by the faculty advisor"
                    },
                    {
                        value: "allReason17",
                        text: "Don’t contribute to what I want to learn"
                    },
                    {
                        value: "allReason18",
                        text: "Family matters (i.e., my family obligations prevent me from joining)"
                    },
                    {
                        value: "allReason19",
                        text: "Gender issue (i.e., awkward interactions between sexes)"
                    },
                    {
                        value: "allReason20",
                        text: "I am not a “joiner” (i.e., value personal goals above that of the group, emphasis on personal achievement)"
                    },
                    {
                        value: "allReason21",
                        text: "Introverted personality (i.e., focus on internal thoughts, feelings)"
                    },
                    {
                        value: "allReason22",
                        text: "Lack of motivation (i.e., I do not want to join, not interesting to me)"
                    },
                    {
                        value: "allReason23",
                        text: "Lack of time, scheduling issue (i.e., great workload of the current major)"
                    },
                    {
                        value: "allReason24",
                        text: "Lack the knowledge about the opportunities (i.e., lack the information of the out of class activities)"
                    },
                    {
                        value: "allReason25",
                        text: "Lengthy, difficult membership process"
                    },
                    {
                        value: "allReason26",
                        text: "Limit to number of participants; a competitive process to join"
                    },
                    {
                        value: "allReason27",
                        text: "Possibility of negative impact"
                    },
                    {
                        value: "allReason28",
                        text: "Race/ethnicity issues (i.e., not feeling welcomed; seemed like non-inclusive environment)"
                    },
                    {
                        value: "allReason29",
                        text: "Social inertia (i.e., I joined something else and it became too hard to leave after joining)"
                    },
                    {
                        value: "allReason30",
                        text: "Personal matters (e.g. I became pregnant, I am married, I have children, etc.)"
                    }
                ]
            }],
        },


        {
            name: "page24",
            visibleIf: "{involvedInActivity} = '1'",
            elements: [{
                type: "radiogroup",
                name: "top",
                title: "From the activities you have participated in, select your top one, the one from which you gained the most outcomes.",
                isRequired: true,
                hasNone: true,
                colCount: 2,
                choices: [
                    {
                        value: "1",
                        text: "Design competition team",
                        visibleIf: "{all} contains '1'"
                    },
                    {
                        value: "2",
                        text: "Culture, faith, gender, identity",
                        visibleIf: "{all} contains '2'"
                    },
                    {
                        value: "3",
                        text: "Environmental",
                        visibleIf: "{all} contains '3'"
                    },
                    {
                        value: "4",
                        text: "Engineering outreach support",
                        visibleIf: "{all} contains '4'"
                    },
                    {
                        value: "5",
                        text: "Film, Theater, Visual Arts",
                        visibleIf: "{all} contains '5'"
                    },
                    {
                        value: "6",
                        text: "Fraternity or sorority, social",
                        visibleIf: "{all} contains '6'"
                    },
                    {
                        value: "7",
                        text: "Fraternity or sorority,coeducation related to your major, for instance business, engineering, or services",
                        visibleIf: "{all} contains '7'"
                    },
                    {
                        value: "8",
                        text: "International experiences",
                        visibleIf: "{all} contains '8'"
                    },
                    {
                        value: "9",
                        text: "Job",
                        visibleIf: "{all} contains '9'"
                    },
                    {
                        value: "10",
                        text: "Living-learning community",
                        visibleIf: "{all} contains '10'"
                    },
                    {
                        value: "11",
                        text: "Media, publications, and journalism",
                        visibleIf: "{all} contains '11'"
                    },
                    {
                        value: "12",
                        text: "Military",
                        visibleIf: "{all} contains '12'"
                    },
                    {
                        value: "13",
                        text: "Music/Dance",
                        visibleIf: "{all} contains '13'"
                    },
                    {
                        value: "14",
                        text: "Pre-professional",
                        visibleIf: "{all} contains '14'"
                    },
                    {
                        value: "15",
                        text: "Professional experiences",
                        visibleIf: "{all} contains '15'"
                    },
                    {
                        value: "16",
                        text: "Research",
                        visibleIf: "{all} contains '16'"
                    },
                    {
                        value: "17",
                        text: "Service, public service",
                        visibleIf: "{all} contains '17'"
                    },
                    {
                        value: "18",
                        text: "Sports",
                        visibleIf: "{all} contains '18'"
                    },
                    {
                        value: "19",
                        text: "Student government",
                        visibleIf: "{all} contains '19'"
                    },
                    {
                        value: "20",
                        text: "Other student clubs & organizations.",
                        visibleIf: "{all} contains '20'"
                    }
                ]
            }]
        },
        {
            name: "page26",
            visibleIf: "{involvedInActivity} = '1'",
            elements: [{
                type: "matrix",
                name: "topOut",
                title: "To what extent do you agree that you gained the following outcomes from your involvement in the top activity?",
                columns: [
                    {
                        value: 1,
                        text: "Strongly Disagree"
                    }, {
                        value: 2,
                        text: "Disagree"
                    }, {
                        value: 3,
                        text: "Agree"
                    }, {
                        value: 4,
                        text: "Strongly Agree"
                    }
                ],
                rows: [
                    {
                        value: "topOut1",
                        text: "Intellectual development (i.e., problem solving skills, analytical skills, critical thinking skills)\">"
                    },
                    {
                        value: "topOut2",
                        text: "Personal development (e.g., self-confidence, identity development, time management skills)"
                    },
                    {
                        value: "topOut3",
                        text: "Social development (e. g., awareness of social issues, treat each other fairly, and civic activism)"
                    },
                    {
                        value: "topOut4",
                        text: "Academic engagement (e. g., academic effort, active and collaborative learning, and interaction with peers and faculty)"
                    },
                    {
                        value: "topOut5",
                        text: "Social engagement (e.g., comfort in various environments and with various persons, campus involvement, and student chapters)"
                    },
                    {
                        value: "topOut6",
                        text: ">Professional development (e. g., professional skills; use of communication, knowledge, technical skills, clinical reasoning, emotions, values, and reflection in daily practice; able to integrate theory and practice)"
                    },
                    {
                        value: "topOut7",
                        text: "Cross-cultural awareness (i.e., knowledge, skills, and affect/motivation that enable individuals to adapt effectively with different cultures; promoting racial understanding; socializing with people from different racial/ethnic groups)"
                    },
                    {
                        value: "topOut8",
                        text: "Civic development (e. g., working to make a difference within a community; development gained through service learning, community service, and voluntarism)"
                    },
                    {
                        value: "topOut9",
                        text: "Communication skills"
                    },
                    {
                        value: "topOut10",
                        text: "Leadership skills"
                    },
                    {
                        value: "topOut11",
                        text: "Satisfaction with the college experience (e. g., satisfaction with the major, satisfaction with the advising quality)"
                    },
                    {
                        value: "topOut12",
                        text: "Sense of belonging to college"
                    },
                    {
                        value: "topOut13",
                        text: "Opportunity to be independent"
                    },
                    {
                        value: "topOut14",
                        text: "Creativity (i.e., thinking outside the box, art, invention, innovation; ability to perceive the world in new ways, to find hidden patterns, to make connections between seemingly unrelated phenomena, and to generate solutions. Creativity involves two processes: thinking, then producing. If you have ideas, but don’t act on them, you are imaginative but not creative.)"
                    },
                    {
                        value: "topOut15",
                        text: "Global competence (i.e., acquisition of in-depth. knowledge and understanding of international issues, an appreciation of and ability to learn and work with. people from diverse linguistic and cultural backgrounds)"
                    },
                    {
                        value: "topOut16",
                        text: "Practical ingenuity/inventiveness (i.e., skill in planning, combining, and adapting in a clever way; Manner in which one identifies problems and finds solutions; skill or cleverness that allows someone to solve problems, invent things, etc.)"
                    },
                    {
                        value: "topOut17",
                        text: "Resilience and flexibility (i.e., ability to learn new things quickly, deal with changing world and apply knowledge to new problems and new contexts)"
                    },
                    {
                        value: "topOut18",
                        text: "Ethical Standards (i.e., pertaining to or dealing with morals or the principles of morality; pertaining to right and wrong in conduct. 2. being in accordance with the rules or standards for right conduct or practice, especially the standards of a profession.)"
                    },
                    {
                        value: "topOut19",
                        text: "Business and management skills (i.e., able to understand and make physical, human, and political decisions; interdependence between technology and the economic and social foundations of modern society)"
                    },
                    {
                        value: "topOut20",
                        text: "Decreased academic engagement(i.e., the degree of attention, curiosity, interest, optimism, and passion that I showed lowered)"
                    },
                    {
                        value: "topOut21",
                        text: "Academic timeline extended (extended time to graduate, i.e., because participating in study abroad, co-op, internship which add to graduate timeline)"
                    },
                    {
                        value: "topOut22",
                        text: "Consumed my time therefore my schedule was less flexible"
                    },
                    {
                        value: "topOut23",
                        text: "Consumed my time therefore my free time was reduced"
                    },
                    {
                        value: "topOut24",
                        text: "Damaged interpersonal relationships"
                    },
                    {
                        value: "topOut25",
                        text: "Decreased my GPA in college"
                    },
                    {
                        value: "topOut26",
                        text: "Increased expense"
                    },
                    {
                        value: "topOut27",
                        text: "Social development negatively impacted (i.e., social transition to the college, less open to new people)"
                    },
                    {
                        value: "topOut28",
                        text: "Declined personal health (i.e., physical health, mental health)"
                    },
                    {
                        value: "topOut29",
                        text: "Decreased social engagement"
                    },
                    {
                        value: "topOut30",
                        text: "Personal development negatively impacted (i.e., poor decision making skills)"
                    }
                ]
            }]
        },


        {
            page: "27",
            visibleIf: "{involvedInActivity} = '1'",
            elements: [{
                type: "matrix",
                name: "topReason",
                title: "Reasons\n" +
                    " \n" +
                    "To what extent do you agree the following reasons prompted you to participate in out-of-classroom activities? \n" +
                    " \n" +
                    " Consider the statement: I participate in out-of-class activities because ________ [fill in a reason below].\n" +
                    " ",
                columns: [
                    {
                        value: 1,
                        text: "Strongly Disagree"
                    }, {
                        value: 2,
                        text: "Disagree"
                    }, {
                        value: 3,
                        text: "Agree"
                    }, {
                        value: 4,
                        text: "Strongly Agree"
                    }
                ],
                rows: [
                    {
                        value: "topReason1",
                        text: "Because I could afford the costs/expense"
                    },
                    {
                        value: "topReason2",
                        text: "Because I had the time"
                    },
                    {
                        value: "topReason3",
                        text: "Because I was provided information concerning the activities"
                    },
                    {
                        value: "topReason4",
                        text: "Because I agree with goals of organization"
                    },
                    {
                        value: "topReason5",
                        text: "To be on par with other students in terms of involvement in activities"
                    },
                    {
                        value: "topReason6",
                        text: "To break down barriers of any kind (i.e., religion, race, Gender, sexual orientation)"
                    },
                    {
                        value: "topReason7",
                        text: "To create positive impact on campus /community"
                    },
                    {
                        value: "topReason8",
                        text: "To follow encouragement from an advisor or faculty member"
                    },
                    {
                        value: "topReason9",
                        text: "To fulfill my personal interests"
                    },
                    {
                        value: "topReason10",
                        text: "To gain experiences that make me more competitive in the job market"
                    },
                    {
                        value: "topReason11",
                        text: "To provide entertainment"
                    },
                    {
                        value: "topReason12",
                        text: "To relieve stress"
                    },
                    {
                        value: "topReason13",
                        text: "To try something new"
                    },
                    {
                        value: "topReason14",
                        text: "Because of my parents influence"
                    }
                ]
            }]
        },


                        {
                            name: "page7",
                            elements: [
                                {
                                    type: "matrix",
                                    name: "ae_grit",
                                    title: "Please indicate the extent to which you agree with the following statements.",
                                    isRequired: true,
                                    columns: [
                                        {value: 1, text: "Strongly Disagree"},
                                        {value: 2, text: "Disagree"},
                                        {value: 3, text: "Agree"},
                                        {value: 4, text: "Strongly Agree"}
                                    ],
                                    rows: [
                                        {
                                            value: "ae1",
                                            text: "My major is interesting to me."
                                        },
                                        {
                                            value: "ae2",
                                            text: "I regret having entered in my major."
                                        },
                                        {
                                            value: "ae3",
                                            text: "I am enthusiastic about my major."
                                        },
                                        {
                                            value: "ae4",
                                            text: "I think I will be very happy to spend the rest of my career in my current academic discipline."
                                        },
                                        {
                                            value: "ae5",
                                            text: "I do not feel a strong sense of “belonging” to my academic discipline."
                                        },
                                        {
                                            value: "ae6",
                                            text: "I do not feel “emotionally attached” to my academic discipline."
                                        }, {
                                            value: "ae7",
                                            text: "I do not feel like “part of the family” in my academic discipline."
                                        }, {
                                            value: "ae8",
                                            text: "My eventual career will directly relate to a job in my academic discipline."
                                        }, {
                                            value: "ae9",
                                            text: "In the future, I will not have a career that requires me to have skills of my academic discipline."
                                        }, {
                                            value: "ae10",
                                            text: "I believe I can meet the demands of a job in my academic discipline."
                                        }, {
                                            value: "ae11",
                                            text: "Being good at my major is an important part of who I am."
                                        }, {
                                            value: "ae12",
                                            text: "Success in my major at school is very valuable to me."
                                        }, {
                                            value: "ae13",
                                            text: "It matters to me how well I do in my major at school."
                                        }, {
                                            value: "ae14",
                                            text: "I am constantly on the lookout for new ways to improve my life."
                                        }, {
                                            value: "ae15",
                                            text: "If I see something I don’t like, I fix it."
                                        }, {
                                            value: "ae16",
                                            text: "I love being a champion for my ideas, even against others’ opposition."
                                        }, {
                                            value: "ae17",
                                            text: "I excel at identifying opportunities."
                                        }, {
                                            value: "ae18",
                                            text: "If I believe in an idea, no obstacle will prevent me from making it happen."
                                        }, {
                                            value: "ae19",
                                            text: "I feel like a real part of the field of my current academic discipline."
                                        }, {
                                            value: "ae20",
                                            text: "I am treated with as much respect by faculty as other students in my major."
                                        }, {
                                            value: "ae21",
                                            text: "The instructors in my major respect me."
                                        }, {
                                            value: "ae22",
                                            text: "I am satisfied with the faculty in my major."
                                        }, {
                                            value: "ae23",
                                            text: "I don't intend to change from my current major to another major."
                                        }, {
                                            value: "ae24",
                                            text: "Overall, I am happy with the major I've chosen."
                                        }, {
                                            value: "ae25",
                                            text: "I discuss academic issues with peers."
                                        }, {
                                            value: "ae26",
                                            text: "I discuss career issues with peers."
                                        }, {
                                            value: "ae27",
                                            text: "I discuss social issues with peers."
                                        }, {
                                            value: "ae28",
                                            text: "I discuss cultural issues with peers."
                                        }, {
                                            value: "grit1",
                                            text: "New ideas and projects sometimes distract me from previous ones."
                                        }, {
                                            value: "grit2",
                                            text: "Setbacks don’t discourage me."
                                        }, {
                                            value: "grit3",
                                            text: "I have been obsessed with a certain idea or project for a short time but later lost interest."
                                        }, {
                                            value: "grit4",
                                            text: "I am a hard worker."
                                        }, {
                                            value: "grit5",
                                            text: "I often set a goal but later choose to pursue a different one."
                                        }, {
                                            value: "grit6",
                                            text: "I have difficulty maintaining my focus on projects that take more than a few months to complete."
                                        }, {
                                            value: "grit7",
                                            text: "I finish whatever I begin."
                                        }, {
                                            value: "grit8",
                                            text: "I am diligent."
                                        }
                                    ]
                                }
                            ],
                        },


                        {
                            name: "page8",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "livingArea",
                                    title: "Where are you living this academic year?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "A living learning/program related to science and engineering in a residence hall"
                                        },
                                        {
                                            value: "2",
                                            text: "A non-science or non-engineering living/learning program in a residence hall"
                                        },
                                        {
                                            value: "3",
                                            text: "A residence hall, but not as part of a living/learning program"
                                        },
                                        {
                                            value: "4",
                                            text: "A fraternity or sorority residence"
                                        },
                                        {
                                            value: "5",
                                            text: "Off campus by myself"
                                        },
                                        {
                                            value: "6",
                                            text: "Off campus with friends/peers"
                                        }, {
                                            value: "7",
                                            text: "Off campus with family"
                                        }, {
                                            value: "8",
                                            text: "Other (please specify)"
                                        }]
                                },
                                {
                                    type: "multipletext",
                                    title: "Referring to your college GPA, what was your cumulative GPA at the end of the most recent academic semester/term?",
                                    name: "gpa",
                                    descriptionLocation: "underTitle",
                                    isRequired: true,
                                    titleLocation: "top",
                                    items: [
                                        {
                                            name: "firstYearGPA",
                                            title: "Not applicable because this is my first year at this institution (write N/A in the box on the right)"
                                        },
                                        {
                                            name: "cumulativeGPA",
                                            title: "Cumulative GPA"
                                        },
                                        {
                                            name: "maxGPA",
                                            title: "On a system where the maximum GPA is"
                                        }
                                    ]
                                },
                              /*{
                                    type: "matrix",
                                    name: "gpa",
                                    title: "Referring to your college GPA, what was your cumulative GPA at the end of the most recent academic semester/term? ",
                                    horizontalScroll: true,
                                    isRequired: true,
                                    columns: [
                                        {
                                            name: "",
                                            title: "",
                                        }, {
                                            name: "",
                                            title: "GPA",
                                            cellType: "text"
                                        }
                                    ]
                                ,

                            rows: [
                                {
                                    value: "firstYearGpa",
                                    text: "Not applicable because this is my first year at this institution (write N/A in the box on the right)"
                                }, {
                                    value: "cumulativeGPA",
                                    text: "Cumulative GPA"
                                }, {
                                    value: "maxGpa",
                                    text: "On a system where the maximum GPA is"
                                }
                            ]
                        }*/]},

                {
                    name: "page9",
                    elements: [
                        {
                            type: "panel",
                            name: "educationPanel",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "guardian1",
                                    hasOther: true,
                                    title: "Please identify parent/guardian #1 from the list below: ",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Father"
                                        },
                                        {
                                            value: "2",
                                            text: "Mother"
                                        },
                                        {
                                            value: "3",
                                            text: "Grandmother"
                                        },
                                        {
                                            value: "4",
                                            text: "Grandfather"
                                        },
                                        {
                                            value: "5",
                                            text: "Aunt"
                                        },
                                        {
                                            value: "6",
                                            text: "Uncle"
                                        },
                                        {
                                            value: "7",
                                            text: "Sibling"
                                        },

                                        {
                                            value: "8",
                                            text: "Not applicable"
                                        },
                                    ],
                                    otherText: "Other family member:"
                                },


                                {
                                    type: "radiogroup",
                                    name: "guardian2",
                                    hasOther: true,
                                    title: "Please identify parent/guardian #2 from the list below. Select NOT APPLICABLE if you don't have a second parent/guardian.",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Father"
                                        },
                                        {
                                            value: "2",
                                            text: "Mother"
                                        },
                                        {
                                            value: "3",
                                            text: "Grandmother"
                                        },
                                        {
                                            value: "4",
                                            text: "Grandfather"
                                        },
                                        {
                                            value: "5",
                                            text: "Aunt"
                                        },
                                        {
                                            value: "6",
                                            text: "Uncle"
                                        },
                                        {
                                            value: "7",
                                            text: "Sibling"
                                        },

                                        {
                                            value: "8",
                                            text: "Not applicable"
                                        },
                                    ],
                                    otherText: "Other family member: "
                                },

                            ],
                        }]
                },

                {
                    name: "page10",
                    elements: [
                        {
                            type: "panel",
                            name: "educationPanel",
                            elements: [
                                {
                                    type: "matrix",
                                    name: "parentEducation",
                                    isRequired: "true",
                                    title: "What is the highest level of formal schooling completed by parent(s)/guardian(s)?",
                                    columns: [
                                        {
                                            value: 1,
                                            text: "Did not finish high school"
                                        }, {
                                            value: 2,
                                            text: "High school graduate or GED"
                                        }, {
                                            value: 3,
                                            text: "Attended college but did not receive a degree"
                                        }, {
                                            value: 4,
                                            text: "Vocational/technical certificate or diploma"
                                        }, {
                                            value: 5,
                                            text: "Associate or other 2-year degree"
                                        }, {
                                        value: 6,
                                            text: "Bachelor's or other 4-year degree"
                                        }, {
                                            value: 7,
                                            text: "Master's degree (M.A., M.S., M.B.A., etc.)"
                                        }, {
                                            value: 8,
                                            text: "Doctoral degree (Ph.D., M.D., etc."
                                        }, {
                                            value: 9,
                                            text: "Unknown/Not applicable"
                                        }
                                    ],
                                    rows: [
                                        {
                                            value: "guardian1SchoolLevel",
                                            text: "Guardian 1"
                                        }, {
                                            value: "guardian2SchoolLevel",
                                            text: "Guardian 2"
                                        }
                                    ]
                                },

                            ],
                        }]
                },


                {
                    name: "page11",
                    elements: [
                        {
                            type: "panel",
                            name: "educationPanel",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "siblingCompleteDegree",
                                    title: "Has one of your siblings (sister or brother) completed a four-year degree or higher?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Yes"
                                        },
                                        {
                                            value: "2",
                                            text: "No"
                                        },
                                        {
                                            value: "3",
                                            text: "I don't have a sibling."
                                        },
                                        {
                                            value: "4",
                                            text: "I don't know."
                                        }
                                    ]
                                }

                            ],
                        }]
                },

                {
                    name: "page12",
                    elements: [
                        {
                            type: "panel",
                            name: "educationPanel",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "houseIncome",
                                    title: "What is the income level in your household? (Provide your best guess).",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Less than $19,999"
                                        },
                                        {
                                            value: "2",
                                            text: "$20,000 - $39,999"
                                        },
                                        {
                                            value: "3",
                                            text: "$40,000 - $59,999"
                                        },
                                        {
                                            value: "4",
                                            text: "$60,000 - $79,999"
                                        },
                                        {
                                            value: "5",
                                            text: "$80,000 - $99,999"
                                        },
                                        {
                                            value: "6",
                                            text: "$100,000 - $149,999"
                                        },
                                        {
                                            value: "7",
                                            text: "$150,000 - $200,000"
                                        },
                                        {
                                            value: "8",
                                            text: "More than $200,000"
                                        }
                                    ]
                                },
                            ],
                        }]
                },

                {
                    name: "page13",
                    elements: [
                        {
                            type: "panel",
                            name: "agePanel",
                            elements: [
                                {
                                    type: "radiogroup",
                                    name: "usCitizen",
                                    title: "Please select one: I am",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "a U.S. Citizen"
                                        },
                                        {
                                            value: "2",
                                            text: "a U.S. Citizen: naturalized"
                                        },
                                        {
                                            value: "3",
                                            text: "a Permanent Resident"
                                        },
                                        {
                                            value: "4",
                                            text: "an International Student (on F-1 or J-1 visa)"
                                        }
                                    ]
                                },

                                {
                                    type: "radiogroup",
                                    name: "military",
                                    title: "Did you serve or are you currently serving in the armed forces of the United States?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Yes"
                                        },
                                        {
                                            value: "2",
                                            text: "No"
                                        }
                                    ]
                                },


                                {
                                    type: "radiogroup",
                                    name: "disability",
                                    title: "Please tell us if you have any disabilities. (Mark all that apply.)",
                                    isRequired: true,
                                    hasOther: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "I have no disabilities."
                                        },
                                        {
                                            value: "2",
                                            text: "Coordination impairment"
                                        },
                                        {
                                            value: "3",
                                            text: "Hearing impairment"
                                        },
                                        {
                                            value: "4",
                                            text: "Learning disability"
                                        },
                                        {
                                            value: "5",
                                            text: "Mobility impairment"
                                        },
                                        {
                                            value: "6",
                                            text: "Speech impairment"
                                        },
                                        {
                                            value: "7",
                                            text: "Visual impairment"
                                        },
                                        {
                                            value: "9",
                                            text: "I choose not to respond"
                                        }
                                    ],
                                    otherText: "Other: (please specify)"
                                },


                                {
                                    type: "radiogroup",
                                    name: "lgbt",
                                    title: "You consider yourself to be:",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Bisexual"
                                        },
                                        {
                                            value: "2",
                                            text: "Gay"
                                        },
                                        {
                                            value: "3",
                                            text: "Lesbian"
                                        },
                                        {
                                            value: "4",
                                            text: "Heterosexual(or Straight)"
                                        },
                                        {
                                            value: "5",
                                            text: "Queer or questioning"
                                        },
                                        {
                                            value: "6",
                                            text: "Asexual"
                                        },
                                        {
                                            value: "7",
                                            text: "Uncertain"
                                        },
                                        {
                                            value: "8",
                                            text: "I choose not to respond"
                                        }
                                    ]
                                }
                            ],
                        }]
                },


                {
                    name: "page14",
                    elements: [

                                {
                                    type: "radiogroup",
                                    name: "highschool1",
                                    title: "Did you graduate from a high school in the United States?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Yes"
                                        },
                                        {
                                            value: "2",
                                            text: "No"
                                        }
                                    ]
                                },

                                {
                                    type: "text",
                                    name: "highschool2",
                                    title: "What is the name of your high school?",
                                    visibleIf: "{highschool1} = '1'",
                                    isRequired: true,
                                    inputType: "text"
                                },

                                {
                                    type: "text",
                                    name: "highschool3",
                                    title: "What is the zip code of the town you attended your high school?",
                                    visibleIf: "{highschool1} = '1'",
                                    isRequired: true,
                                    inputType: "number"
                                },

                                {
                                    type: "radiogroup",
                                    name: "highschool4",
                                    title: "Were you involved in out-of-class activities in high school?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Yes"
                                        },
                                        {
                                            value: "2",
                                            text: "No"
                                        }
                                    ]
                                },


                                {
                                    type: "dropdown",
                                    name: "highschool5",
                                    title: "How many out-of-class activities were you involved in during your last year of high school?",
                                    visibleIf:"{highschool4} = '1'",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "1"
                                        },
                                        {
                                            value: "2",
                                            text: "2"
                                        },
                                        {
                                            value: "3",
                                            text: "3"
                                        },
                                        {
                                            value: "4",
                                            text: "4"
                                        },
                                        {
                                            value: "5",
                                            text: "5"
                                        },
                                        {
                                            value: "6",
                                            text: "6"
                                        },
                                        {
                                            value: "7",
                                            text: "7"
                                        },
                                        {
                                            value: "8",
                                            text: "8"
                                        },
                                        {
                                            value: "9",
                                            text: "9"
                                        },
                                        {
                                            value: "10",
                                            text: "10"
                                        },
                                        {
                                            value: "11",
                                            text: "11+"
                                        }
                                    ]
                                },


                                {
                                    type: "radiogroup",
                                    name: "highschool6",
                                    title: "How actively did you participate in out-of-class activities in high school?",
                                    visibleIf: "{highschool4} = '1'",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Not at all active"
                                        },
                                        {
                                            value: "2",
                                            text: "Minimally active"
                                        },
                                        {
                                            value: "3",
                                            text: "Moderately active"
                                        },
                                        {
                                            value: "4",
                                            text: "Highly active"
                                        }
                                    ]
                                }

                            ]
                        },


                {
                    name: "page16",
                    elements: [
                        {
                            type: "panel",
                            name: "agePanel",
                            elements: [
                                {
                                    type: "text",
                                    name: "contact1",
                                    title: "Please provide any comments you may have regarding you experience in taking this survey.",
                                    inputType: "text",
                                },

                                {
                                    type: "radiogroup",
                                    name: "contact2",
                                    title: "We may have questions about your responses. May we contact you?",
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: "1",
                                            text: "Yes"
                                        },
                                        {
                                            value: "2",
                                            text: "No"
                                        }
                                    ]
                                },
                                {
                                    type: "multipletext",
                                    name: "contactInfo",
                                    title: "Please provide your contact information below.",
                                    visibleIf: "{contact2} = '1'",
                                    rowCount: 3,
                                    items: [
                                        {
                                            name: "contact3",
                                            title: "Name"
                                        }, {
                                            name: "contact4",
                                            title: "Phone Number"
                                        }, {
                                            name: "contact5",
                                            title: "Email Address"
                                        }
                                    ]
                                }

                            ],
                        }]
                },

                {
                    name: "page17",
                    elements: [
                        {
                            type: "panel",
                            name: "drawingPanel",
                            elements: [
                                {
                                    type: "text",
                                    name: "contact6",
                                    title: "If you want to enter into the drawing for the gift card, please add your email address.",
                                    inputType: "text"
                                },
                            ],
                        }]
                },






                                    /*{
                    type: "panel",
                    name: "E2Panel",
                    elements: [
                        {
                            type: "dropdown",
                            name: "E2",
                            title: "E2020-2: Practical Ingenuity",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ]
                        },
                        {
                            type: "dropdown",
                            name: "E3",
                            title: "E2020-3: Creativity",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ]
                        },
                        {
                            type: "dropdown",
                            name: "E4",
                            title: "E2020-4: Communication",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ]
                        },
                        {
                            type: "dropdown",
                            name: "E5",
                            title: "E2020-5: Business and Management",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ]
                        },
                        {
                            type: "dropdown",
                            name: "E6",
                            title: "E2020-6: Leadership",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ]
                        },
                        {
                            type: "dropdown",
                            name: "E7",
                            title: "E2020-7: High Ethical Standards",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ]
                        },
                        {
                            type: "dropdown",
                            name: "E8",
                            title: "E2020-8: Professionalism",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ]
                        },
                        {
                            type: "dropdown",
                            name: "E9",
                            title: "E2020-9: Dynamism, Agility, Resilience, and Flexibility",
                            isRequired: true,
                            choices: [
                                {
                                    value: 1,
                                    text: "Strongly Disagree"
                                },
                                {
                                    value: 2,
                                    text: "Disagree"
                                },
                                {
                                    value: 3,
                                    text: "Agree"
                                },
                                {
                                    value: 4,
                                    text: "Strongly Agree"
                                }
                            ]
                        }
                    ],
                    title: "Engineering 2020 Outcomes",
                    isRequired: true
                },*/
                {

                    name: "page5",
                    elements: [
                        {
                            type: "panel",
                            name: "contactInfoPanel",
                            elements: [
                                {
                                    type: "text",
                                    name: "phone",
                                    title: "Phone Number",
                                    inputType: "tel",
                                    placeHolder: "Enter your phone number here"
                                }
                            ],
                            title: "Contact Information",
                            description: "Would you mind receiving future questions about this survey? If so, would you mind sharing your phone number below?"
                        }
                    ],
                    title: "Other"
                }
            ],
            triggers: [
                {
                    type: "complete"
                },
                {
                    type: "complete",
                    expression: "{consentQuestion} = \"disagree\""
                }
            ],
            showProgressBar: "top"
        }



