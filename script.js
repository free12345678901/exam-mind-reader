
// Subject mapping with fuzzy matching
const subjectMappings = {
    // Math variations
    'math': 'Math',
    'maths': 'Math',
    'mathematics': 'Math',
    'calculus': 'Math',
    'algebra': 'Math',
    'geometry': 'Math',
    'trigonometry': 'Math',
    'statistics': 'Math',
    'stats': 'Math',
    
    // Science variations
    'physics': 'Physics',
    'chemistry': 'Chemistry',
    'chem': 'Chemistry',
    'biology': 'Biology',
    'bio': 'Biology',
    'science': 'Science',
    
    // Languages
    'english': 'English',
    'literature': 'English',
    'language': 'English',
    'writing': 'English',
    
    // Social Sciences
    'history': 'History',
    'geography': 'Geography',
    'geo': 'Geography',
    'economics': 'Economics',
    'econ': 'Economics',
    'psychology': 'Psychology',
    'psych': 'Psychology',
    
    // Computer Science
    'computer': 'Computer Science',
    'programming': 'Computer Science',
    'coding': 'Computer Science',
    'software': 'Computer Science',
    'algorithm': 'Computer Science',
    
    // Creative Arts
    'art': 'Art',
    'drawing': 'Art',
    'painting': 'Art',
    'sketch': 'Art',
    'design': 'Design',
    'graphic': 'Design',
    'music': 'Music',
    'piano': 'Music',
    'guitar': 'Music',
    'singing': 'Music',
    'vocal': 'Music',
    'dance': 'Dance',
    'dancing': 'Dance',
    'ballet': 'Dance',
    'theater': 'Theater',
    'acting': 'Theater',
    'drama': 'Theater',
    
    // Sports & Physical
    'sports': 'Sports',
    'football': 'Sports',
    'basketball': 'Sports',
    'tennis': 'Sports',
    'swimming': 'Sports',
    'gym': 'Physical Education',
    'fitness': 'Physical Education',
    'workout': 'Physical Education',
    
    // Languages
    'french': 'French',
    'spanish': 'Spanish',
    'german': 'German',
    'italian': 'Italian',
    'japanese': 'Japanese',
    'chinese': 'Chinese',
    'korean': 'Korean',
    
    // Technical Skills
    'photography': 'Photography',
    'photo': 'Photography',
    'cooking': 'Culinary Arts',
    'chef': 'Culinary Arts',
    'baking': 'Culinary Arts',
    'mechanic': 'Mechanical Skills',
    'engineering': 'Engineering',
    'electronics': 'Electronics',
    
    // Business & Finance
    'business': 'Business',
    'finance': 'Finance',
    'accounting': 'Accounting',
    'marketing': 'Marketing',
    'management': 'Management'
};

// Study tips for each subject with multiple tip sets (4 tips each)
const studyTips = {
    'Math': [
        ['Practice problems step by step', 'Use visual aids for concepts', 'Join study groups for discussion', 'Create a formula reference sheet'],
        ['Create formula cheat sheets', 'Solve past exam papers', 'Teach concepts to others', 'Practice with timed exercises'],
        ['Use online math tools', 'Break complex problems down', 'Practice mental calculations', 'Study pattern recognition'],
        ['Watch educational videos', 'Form study partnerships', 'Review mistakes carefully', 'Use spaced repetition method']
    ],
    'Physics': [
        ['Do hands-on experiments', 'Connect theory to real life', 'Practice derivations', 'Study physics simulations'],
        ['Use simulation software', 'Draw free body diagrams', 'Memorize key formulas', 'Practice problem solving strategies'],
        ['Solve numerical problems daily', 'Read physics magazines', 'Join physics forums', 'Watch physics demonstrations'],
        ['Create concept maps', 'Practice unit conversions', 'Study with flashcards', 'Apply physics to everyday examples']
    ],
    'Chemistry': [
        ['Practice balancing equations', 'Use molecular models', 'Memorize periodic trends', 'Study reaction mechanisms'],
        ['Do laboratory experiments', 'Create reaction charts', 'Study with mnemonics', 'Practice chemical nomenclature'],
        ['Watch reaction videos', 'Practice stoichiometry', 'Use chemistry apps', 'Study molecular geometry'],
        ['Form study groups', 'Review safety procedures', 'Practice naming compounds', 'Connect chemistry to real life']
    ],
    'Biology': [
        ['Draw detailed diagrams', 'Use colored highlighting', 'Create mind maps', 'Study biological processes'],
        ['Study with flashcards', 'Watch nature documentaries', 'Practice labeling', 'Use biological models'],
        ['Use biology apps', 'Join study groups', 'Review with animations', 'Study from multiple sources'],
        ['Create flow charts', 'Practice classifications', 'Study real specimens', 'Connect biology to health']
    ],
    'Art': [
        ['Practice daily sketching', 'Study master artworks', 'Experiment with mediums', 'Keep an art journal'],
        ['Join art communities', 'Take progress photos', 'Study color theory', 'Practice different art styles'],
        ['Visit art galleries', 'Try different techniques', 'Get feedback from others', 'Study art history'],
        ['Keep a sketchbook', 'Study anatomy basics', 'Practice observational drawing', 'Develop personal style']
    ],
    'Music': [
        ['Practice scales daily', 'Listen actively to music', 'Learn music theory', 'Record practice sessions'],
        ['Record your practice', 'Play with others', 'Study different genres', 'Practice rhythm exercises'],
        ['Use metronome regularly', 'Memorize key signatures', 'Practice sight reading', 'Study music composition'],
        ['Join music groups', 'Study your favorite songs', 'Practice ear training', 'Learn music history']
    ],
    'Dance': [
        ['Practice basic movements', 'Watch dance videos', 'Stretch regularly', 'Study dance history'],
        ['Learn different styles', 'Practice with music', 'Record your progress', 'Work on stage presence'],
        ['Join dance classes', 'Study choreography', 'Practice coordination', 'Improve muscle memory'],
        ['Work on flexibility', 'Learn rhythm patterns', 'Practice in front of mirror', 'Study dance technique']
    ],
    'Sports': [
        ['Practice fundamental skills', 'Study game strategies', 'Watch professional games', 'Work on mental toughness'],
        ['Work on physical fitness', 'Practice with teammates', 'Study opponent tactics', 'Improve reaction time'],
        ['Focus on technique', 'Practice mental preparation', 'Review game footage', 'Study sports psychology'],
        ['Work on endurance', 'Practice specific drills', 'Study rules thoroughly', 'Maintain healthy diet']
    ],
    'Design': [
        ['Study design principles', 'Practice with software', 'Analyze good designs', 'Build design portfolio'],
        ['Create daily sketches', 'Study color theory', 'Build a portfolio', 'Practice user research'],
        ['Get feedback regularly', 'Study typography', 'Practice with constraints', 'Learn design trends'],
        ['Follow design trends', 'Study user experience', 'Practice different styles', 'Study design systems']
    ],
    'Photography': [
        ['Practice composition rules', 'Study lighting techniques', 'Take photos daily', 'Build photo portfolio'],
        ['Learn photo editing', 'Study famous photographers', 'Practice different genres', 'Study photography theory'],
        ['Join photography groups', 'Study camera settings', 'Practice with constraints', 'Experiment with angles'],
        ['Analyze great photos', 'Practice storytelling', 'Study color grading', 'Learn post-processing']
    ],
    'Theater': [
        ['Practice script reading', 'Study character development', 'Practice voice projection', 'Work on stage presence'],
        ['Work on body language', 'Study different acting methods', 'Practice improvisation', 'Study script analysis'],
        ['Watch theater performances', 'Practice emotional range', 'Study stage directions', 'Practice vocal exercises'],
        ['Work with scene partners', 'Practice memorization', 'Study theater history', 'Develop character backstory']
    ],
    'Culinary Arts': [
        ['Practice knife skills', 'Study flavor combinations', 'Practice basic techniques', 'Learn food presentation'],
        ['Learn food safety', 'Study different cuisines', 'Practice mise en place', 'Study ingredient properties'],
        ['Watch cooking shows', 'Practice plating techniques', 'Study nutrition basics', 'Learn menu planning'],
        ['Practice time management', 'Learn ingredient substitutions', 'Study cooking methods', 'Practice recipe development']
    ],
    'English': [
        ['Read diverse literature', 'Practice writing daily', 'Study grammar rules', 'Expand reading comprehension'],
        ['Analyze literary devices', 'Practice essay structure', 'Expand vocabulary', 'Study writing techniques'],
        ['Join book clubs', 'Practice critical thinking', 'Study different genres', 'Practice peer review'],
        ['Write creative pieces', 'Practice public speaking', 'Study poetry techniques', 'Learn editing skills']
    ],
    'History': [
        ['Create timeline charts', 'Study primary sources', 'Practice essay writing', 'Learn historical analysis'],
        ['Use historical maps', 'Study cause and effect', 'Practice analyzing sources', 'Study historical context'],
        ['Watch documentaries', 'Create character studies', 'Practice chronological thinking', 'Study historical debates'],
        ['Study different perspectives', 'Practice research skills', 'Create visual aids', 'Learn historical methodology']
    ],
    'Computer Science': [
        ['Code every day', 'Build personal projects', 'Study algorithms', 'Practice code reviews'],
        ['Practice debugging', 'Learn new languages', 'Contribute to open source', 'Study software architecture'],
        ['Study data structures', 'Practice problem solving', 'Join coding communities', 'Learn version control'],
        ['Read tech blogs', 'Practice system design', 'Study best practices', 'Work on coding challenges']
    ],
    'Business': [
        ['Study case studies', 'Practice presentations', 'Learn business terminology', 'Study market analysis'],
        ['Study market trends', 'Practice financial analysis', 'Network with professionals', 'Learn business strategy'],
        ['Read business news', 'Practice negotiation', 'Study leadership styles', 'Study business ethics'],
        ['Analyze successful companies', 'Practice strategic thinking', 'Study economic principles', 'Learn project management']
    ]
};

// Default tips for unrecognized subjects
const defaultTips = [
    'Break down complex topics into smaller chunks',
    'Practice regularly rather than cramming',
    'Teach someone else to test your understanding',
    'Use active learning techniques and review frequently'
];

// Filler words to remove
const fillerWords = [
    'its', 'it\'s', 'i', 'think', 'maybe', 'probably', 'like', 'um', 'uh',
    'so', 'well', 'you', 'know', 'kind', 'of', 'sort', 'just', 'really',
    'very', 'actually', 'basically', 'literally', 'totally', 'completely',
    'absolutely', 'definitely', 'obviously', 'clearly', 'frankly', 'honestly',
    'apparently', 'seemingly', 'presumably', 'supposedly', 'allegedly',
    'lol', 'lmao', 'haha', 'omg', 'wtf', 'idk', 'tbh', 'ngl', 'fr',
    'and', 'or', 'but', 'the', 'a', 'an', 'is', 'are', 'was', 'were',
    'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
    'will', 'would', 'could', 'should', 'may', 'might', 'can', 'must'
];

// Negative words that indicate lack of preparation or difficulty
const negativeIndicators = [
    'not', 'no', 'none', 'nothing', 'never', 'hardly', 'barely', 'cant', 'can\'t',
    'dont', 'don\'t', 'wont', 'won\'t', 'havent', 'haven\'t', 'hasnt', 'hasn\'t',
    'didnt', 'didn\'t', 'isnt', 'isn\'t', 'arent', 'aren\'t', 'wasnt', 'wasn\'t',
    'werent', 'weren\'t', 'bad', 'terrible', 'awful', 'hate', 'suck', 'sucks',
    'difficult', 'hard', 'tough', 'struggle', 'struggling', 'confused', 'lost'
];

// DOM elements
const examForm = document.getElementById('examForm');
const formSection = document.getElementById('formSection');
const resultsSection = document.getElementById('resultsSection');
const predictionText = document.getElementById('predictionText');
const tipsList = document.getElementById('tipsList');
const refreshBtn = document.getElementById('refreshBtn');
const submitBtn = document.querySelector('.submit-btn');
const errorMessage = document.getElementById('errorMessage');
const confidenceBar = document.getElementById('confidenceBar');

// State management
let isSubmitting = false;
let detectedSubject = null;
let confidenceLevel = 0;

// Theme management
let currentTheme = 'system';

// Initialize app
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    initializeTheme();
    showLoadingScreen();
    setTimeout(() => {
        hideLoadingScreen();
        loadSavedData();
        setupEventListeners();
        setupFormValidation();
        setupAccessibility();
    }, 3500);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'system';
    currentTheme = savedTheme;
    applyTheme(savedTheme);
    updateThemeIcon(savedTheme);
}

function applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === 'system') {
        // Remove data-theme attribute to let CSS handle system preference
        html.removeAttribute('data-theme');
    } else {
        html.setAttribute('data-theme', theme);
    }
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (!themeIcon) return;
    
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'system') {
        themeIcon.textContent = systemPrefersDark ? '🌙' : '☀️';
    } else if (theme === 'dark') {
        themeIcon.textContent = '🌙';
    } else {
        themeIcon.textContent = '☀️';
    }
}

function toggleTheme(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const themeToggle = document.getElementById('themeToggle');
    
    // Prevent multiple rapid clicks
    if (themeToggle.classList.contains('clicked')) {
        return;
    }
    
    // Add click animation
    themeToggle.classList.add('clicked');
    setTimeout(() => {
        themeToggle.classList.remove('clicked');
    }, 600);
    
    const themes = ['system', 'light', 'dark'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    currentTheme = nextTheme;
    applyTheme(nextTheme);
    updateThemeIcon(nextTheme);
    localStorage.setItem('theme', nextTheme);
}

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
        // Disable scrolling during intro
        document.body.style.overflow = 'hidden';
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // Re-enable scrolling after intro
            document.body.style.overflow = '';
        }, 800);
    }
}

function setupEventListeners() {
    examForm.addEventListener('submit', handleFormSubmit);
    refreshBtn.addEventListener('click', handleRefresh);
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme, { passive: false });
        // Prevent double-tap on mobile
        themeToggle.addEventListener('touchstart', (e) => {
            e.preventDefault();
        }, { passive: false });
    }
    
    // Auto-save form data
    ['nextExam', 'hardestPart', 'preparation'].forEach(id => {
        const element = document.getElementById(id);
        element.addEventListener('input', debounce(saveFormData, 300));
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Setup animated placeholders
    setupAnimatedPlaceholders();
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (currentTheme === 'system') {
            updateThemeIcon('system');
        }
    });
}

function setupAnimatedPlaceholders() {
    const placeholders = [
        {
            element: document.getElementById('nextExam'),
            texts: [
                "e.g., It's maths, chemistry or biology...",
                "Maybe physics or programming?",
                "Drawing, singing, or swimming?",
                "Could be history or art class..."
            ]
        },
        {
            element: document.getElementById('hardestPart'),
            texts: [
                "Tell me what's really stressing you out...",
                "What makes you nervous about it?",
                "Which part keeps you awake at night?",
                "What's the most challenging aspect?"
            ]
        },
        {
            element: document.getElementById('preparation'),
            texts: [
                "Maybe nothing lol, or studied for years 😭...",
                "Have you practiced or just procrastinated?",
                "Cramming last minute or well prepared?",
                "Been studying hard or barely started?"
            ]
        }
    ];
    
    placeholders.forEach(({ element, texts }, placeholderIndex) => {
        let currentIndex = 0;
        let typeInterval;
        let restartTimeout;
        let isTyping = false;
        
        function animatePlaceholder() {
            if (isTyping || element.value || document.activeElement === element) return;
            
            const text = texts[currentIndex];
            element.placeholder = '';
            isTyping = true;
            
            let charIndex = 0;
            typeInterval = setInterval(() => {
                if (element.value || document.activeElement === element) {
                    clearInterval(typeInterval);
                    isTyping = false;
                    return;
                }
                
                element.placeholder += text[charIndex];
                charIndex++;
                
                if (charIndex >= text.length) {
                    clearInterval(typeInterval);
                    isTyping = false;
                    restartTimeout = setTimeout(() => {
                        currentIndex = (currentIndex + 1) % texts.length;
                        restartTimeout = setTimeout(animatePlaceholder, 500);
                    }, 3000);
                }
            }, 50);
        }
        
        function stopAnimation() {
            if (typeInterval) clearInterval(typeInterval);
            if (restartTimeout) clearTimeout(restartTimeout);
            isTyping = false;
        }
        
        element.addEventListener('focus', stopAnimation);
        element.addEventListener('input', stopAnimation);
        element.addEventListener('blur', () => {
            if (!element.value) {
                setTimeout(animatePlaceholder, 1000);
            }
        });
        
        // Initial animation with staggered start times
        setTimeout(animatePlaceholder, placeholderIndex * 800 + Math.random() * 1000);
    });
}

function setupFormValidation() {
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.style.borderColor = '#48bb78';
                this.style.boxShadow = '0 0 0 3px rgba(72, 187, 120, 0.1)';
            } else {
                this.style.borderColor = '#e2e8f0';
                this.style.boxShadow = 'none';
            }
        });
    });
}

function setupAccessibility() {
    const focusableElements = document.querySelectorAll('input, textarea, button');
    focusableElements.forEach((element, index) => {
        element.setAttribute('tabindex', index + 1);
    });
}

function handleKeyboardShortcuts(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        if (formSection.style.display !== 'none') {
            e.preventDefault();
            examForm.dispatchEvent(new Event('submit'));
        }
    }
    
    if (e.key === 'Escape' && resultsSection.style.display !== 'none') {
        handleRefresh();
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    hideError();
    isSubmitting = true;
    setSubmitButtonLoading(true);
    
    try {
        const formData = getFormData();
        
        if (!validateFormData(formData)) {
            throw new Error('Please fill in all required fields');
        }
        
        // Process input and detect subject
        const analysis = analyzeInput(formData);
        
        if (analysis.isNegative) {
            throw new Error('Sorry, we can\'t handle negative input. Please tell us what subject you actually have an exam for!');
        }
        
        if (analysis.isUnknown) {
            throw new Error('Sorry, your input seems unclear or contains random text. Please provide clear information about your exam subject and preparation!');
        }
        
        if (!analysis.subject) {
            throw new Error('Sorry, we couldn\'t detect a subject. Please try again with more details about what subject your exam is for.');
        }
        
        // Save to localStorage
        localStorage.setItem('examFormData', JSON.stringify(formData));
        
        // Simulate AI processing time
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Generate and display results
        const results = generateResults(analysis, formData);
        await displayResults(results);
        
        showResults();
        
    } catch (error) {
        console.error('Form submission error:', error);
        showError(error.message);
    } finally {
        isSubmitting = false;
        setSubmitButtonLoading(false);
    }
}

function handleRefresh() {
    localStorage.removeItem('examFormData');
    localStorage.removeItem('examResults');
    
    examForm.reset();
    hideError();
    
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.style.borderColor = '#e2e8f0';
        input.style.boxShadow = 'none';
    });
    
    hideResults();
    document.getElementById('nextExam').focus();
}

function getFormData() {
    return {
        nextExam: document.getElementById('nextExam').value.trim(),
        hardestPart: document.getElementById('hardestPart').value.trim(),
        preparation: document.getElementById('preparation').value.trim()
    };
}

function validateFormData(formData) {
    return formData.nextExam && formData.hardestPart && formData.preparation;
}

function cleanInput(text) {
    const cleaned = text
        .toLowerCase()
        .replace(/[^\w\s']/g, ' ') // Remove punctuation but keep apostrophes
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
    
    const words = cleaned.split(' ').filter(word => word.length > 0);
    
    // Preserve negative indicators and subject keywords
    const importantWords = words.filter(word => {
        // Keep subject-related words
        if (Object.keys(subjectMappings).some(key => key.includes(word) || word.includes(key))) {
            return true;
        }
        // Keep negative indicators
        if (negativeIndicators.includes(word)) {
            return true;
        }
        // Filter out filler words
        return !fillerWords.includes(word);
    });
    
    return importantWords.join(' ');
}

function analyzeInput(formData) {
    const examText = cleanInput(formData.nextExam);
    const hardestPartText = cleanInput(formData.hardestPart);
    const prepText = cleanInput(formData.preparation);
    const combinedText = `${examText} ${hardestPartText}`;
    
    // Check for random/unknown input patterns
    const isRandomInput = (text) => {
        const originalText = text.toLowerCase().replace(/[^a-z]/g, '');
        // Check if it's just random characters without meaningful words
        const hasVowels = /[aeiou]/.test(originalText);
        const hasConsonants = /[bcdfghjklmnpqrstvwxyz]/.test(originalText);
        const hasPattern = /(.)\1{2,}/.test(originalText); // repeated chars
        const tooShort = originalText.length < 3;
        const noSpaces = !text.includes(' ') && originalText.length > 8;
        
        // Check if it contains any known words from our subject mapping
        const hasKnownWords = Object.keys(subjectMappings).some(subject => 
            originalText.includes(subject) || subject.includes(originalText.substring(0, 4))
        );
        
        return ((!hasVowels || !hasConsonants) && !hasKnownWords) || 
               hasPattern || 
               (noSpaces && !hasKnownWords) ||
               (tooShort && !hasKnownWords);
    };
    
    // Check for negative input in subject field
    const negativeSubjectIndicators = ['hate', 'nothing', 'no', 'none', 'dont', 'don\'t', 'cant', 'can\'t', 'wont', 'won\'t'];
    const hasNegativeSubject = negativeSubjectIndicators.some(word => 
        formData.nextExam.toLowerCase().includes(word) && 
        !Object.keys(subjectMappings).some(subject => formData.nextExam.toLowerCase().includes(subject))
    );
    
    if (hasNegativeSubject) {
        return {
            subject: null,
            confidence: 0,
            isNegative: true
        };
    }
    
    // Check for random/unknown inputs in all fields
    if (isRandomInput(formData.nextExam) || isRandomInput(formData.hardestPart) || isRandomInput(formData.preparation)) {
        return {
            subject: null,
            confidence: 0,
            isUnknown: true
        };
    }
    
    // Find subject matches
    let detectedSubject = null;
    let confidence = 0;
    
    // Check for exact matches first
    for (const [key, subject] of Object.entries(subjectMappings)) {
        if (combinedText.includes(key)) {
            detectedSubject = subject;
            confidence = examText.includes(key) ? 90 : 75;
            break;
        }
    }
    
    // If no exact match, try partial matching
    if (!detectedSubject) {
        for (const [key, subject] of Object.entries(subjectMappings)) {
            if (combinedText.includes(key.substring(0, Math.min(3, key.length)))) {
                detectedSubject = subject;
                confidence = 60;
                break;
            }
        }
    }
    
    // Handle negative sentences in preparation
    const hasNegativeIndicators = negativeIndicators.some(word => prepText.includes(word));
    const hasPositivePrep = ['lot', 'much', 'hard', 'years', 'well', 'good', 'ready'].some(word => prepText.includes(word));
    
    // Adjust confidence based on preparation level
    if (hasNegativeIndicators || prepText.includes('nothing') || prepText.includes('zero')) {
        confidence = Math.max(confidence - 25, 35);
    } else if (hasPositivePrep) {
        confidence = Math.min(confidence + 15, 95);
    }
    
    // Handle negative sentences like "haven't studied math"
    if (examText.includes('havent') || examText.includes('haven\'t') || 
        hardestPartText.includes('havent') || hardestPartText.includes('haven\'t')) {
        confidence = Math.max(confidence - 10, 40);
    }
    
    return {
        subject: detectedSubject,
        confidence: confidence,
        isNegative: false,
        isUnknown: false
    };
}

function generateResults(analysis, formData) {
    const subject = analysis.subject;
    const confidence = analysis.confidence;
    
    // Create prediction text
    const prediction = `You're probably most scared of ${subject}!`;
    
    // Get contextual tips based on all inputs
    const tips = getContextualTips(subject, formData);
    
    const results = {
        prediction: prediction,
        tips: tips,
        subject: subject,
        confidence: confidence,
        timestamp: Date.now(),
        formData: formData // Store form data for comparison
    };
    
    localStorage.setItem('examResults', JSON.stringify(results));
    
    return results;
}

function getContextualTips(subject, formData) {
    const subjectTips = studyTips[subject] || [defaultTips];
    
    // Generate a hash from form inputs to ensure different tips for different inputs
    const inputHash = hashCode(formData.nextExam + formData.hardestPart + formData.preparation);
    const tipSetIndex = Math.abs(inputHash) % subjectTips.length;
    
    let selectedTips = subjectTips[tipSetIndex];
    
    // Customize tips based on preparation level
    const prepText = formData.preparation.toLowerCase();
    
    if (prepText.includes('nothing') || prepText.includes('zero') || prepText.includes('not') || prepText.includes('barely')) {
        // Beginner tips
        selectedTips = selectedTips.map(tip => {
            if (tip.includes('advanced') || tip.includes('complex')) {
                return 'Start with basic concepts and build up gradually';
            }
            return tip;
        });
    } else if (prepText.includes('lot') || prepText.includes('much') || prepText.includes('hard') || prepText.includes('years')) {
        // Advanced tips
        selectedTips = selectedTips.map((tip, index) => {
            if (index === 0) return 'Focus on practice tests and exam strategies';
            return tip;
        });
    }
    
    // Customize based on what's hardest
    const hardestText = formData.hardestPart.toLowerCase();
    if (hardestText.includes('time') || hardestText.includes('speed') || hardestText.includes('fast')) {
        selectedTips[2] = 'Practice time management and speed techniques';
    } else if (hardestText.includes('memory') || hardestText.includes('remember') || hardestText.includes('forget')) {
        selectedTips[2] = 'Use memory techniques like mnemonics and spaced repetition';
    } else if (hardestText.includes('understand') || hardestText.includes('confusing') || hardestText.includes('complex')) {
        selectedTips[2] = 'Break down complex topics into smaller, manageable parts';
    }
    
    return selectedTips;
}

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

async function displayResults(results) {
    // Set prediction text with typewriter effect
    await typewriterEffect(predictionText, results.prediction);
    
    // Set confidence bar
    confidenceBar.style.width = `${results.confidence}%`;
    
    // Clear and populate tips list
    tipsList.innerHTML = '';
    
    results.tips.forEach((tip, index) => {
        const li = document.createElement('li');
        li.textContent = tip;
        li.style.animationDelay = `${(index + 1) * 0.1}s`;
        tipsList.appendChild(li);
    });
}

function typewriterEffect(element, text, speed = 50) {
    return new Promise(resolve => {
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        
        type();
    });
}

function showResults() {
    formSection.style.display = 'none';
    resultsSection.style.display = 'block';
    resultsSection.focus();
}

function hideResults() {
    resultsSection.style.display = 'none';
    formSection.style.display = 'block';
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    setTimeout(() => {
        hideError();
    }, 5000);
}

function hideError() {
    errorMessage.style.display = 'none';
}

function loadSavedData() {
    // Load form data
    const savedFormData = localStorage.getItem('examFormData');
    if (savedFormData) {
        try {
            const formData = JSON.parse(savedFormData);
            document.getElementById('nextExam').value = formData.nextExam || '';
            document.getElementById('hardestPart').value = formData.hardestPart || '';
            document.getElementById('preparation').value = formData.preparation || '';
        } catch (error) {
            console.error('Error loading form data:', error);
        }
    }
    
    // Load results
    const savedResults = localStorage.getItem('examResults');
    if (savedResults) {
        try {
            const results = JSON.parse(savedResults);
            displayResults(results);
            showResults();
        } catch (error) {
            console.error('Error loading results:', error);
        }
    }
}

function saveFormData() {
    const formData = getFormData();
    localStorage.setItem('examFormData', JSON.stringify(formData));
}

function setSubmitButtonLoading(loading) {
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    
    if (loading) {
        submitBtn.disabled = true;
        btnText.textContent = 'Reading...';
        btnIcon.textContent = '🔄';
        submitBtn.style.opacity = '0.7';
    } else {
        submitBtn.disabled = false;
        btnText.textContent = 'Read My Mind';
        btnIcon.textContent = '🔮';
        submitBtn.style.opacity = '1';
    }
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize app
console.log('Exam Mind Reader initialized successfully');
